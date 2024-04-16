from flask import Flask, request,render_template, redirect,session
from flask_sqlalchemy import SQLAlchemy
import bcrypt
from flask import jsonify

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)
app.secret_key = 'secret_key'
# At the beginning of app.py, after the imports
BLOCKS_JSON = [
    {"block": "MHA", "warden": "Nathan"},
    {"block": "MHB", "warden": "MuraliTharan"},
    {"block": "MHC", "warden": "Senthilnathan"},
    {"block": "MHD", "warden": "Vizac Arora"},
    {"block": "LHA", "warden": "Washima"},
    {"block": "LHE", "warden": " Pallavi "},
    {"block": "LHF", "warden": "Sushmita Sen"},
    {"block": "LHB", "warden": " Krishika Singhania"},
]
class RoommatePreference(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone= db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    room_type = db.Column(db.String(100))
    block_preference = db.Column(db.String(100))
    branch_preference = db.Column(db.String(100))
    class_slot = db.Column(db.String(100))
    additional_preferences = db.Column(db.Text)

    def __init__(self, user_id, name, email,phone, room_type, block_preference, branch_preference, class_slot, additional_preferences):
        self.user_id = user_id
        self.name = name
        self.email = email
        self.room_type = room_type
        self.phone=phone
        self.block_preference = block_preference
        self.branch_preference = branch_preference
        self.class_slot = class_slot
        self.additional_preferences = additional_preferences




class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True)
    block = db.Column(db.String(100),nullable=False)
    gender = db.Column(db.String(100),nullable=False)
    phone = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100))

    def __init__(self,email,gender,phone,password,block,name):
        self.name = name
        self.email = email
        self.block= block
        self.gender=gender
        self.phone=phone
        self.password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    
    def check_password(self,password):
        return bcrypt.checkpw(password.encode('utf-8'),self.password.encode('utf-8'))

with app.app_context():
    db.create_all()


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register',methods=['GET','POST'])
def register():
    if request.method == 'POST':
        # handle request
        name = request.form['name']
        email = request.form['email']
        block=request.form['block']
        password = request.form['password']
        gender= request.form['gender']
        phone= request.form['phone']
        new_user = User(name=name,email=email,block=block,gender=gender,phone=phone,password=password)
        db.session.add(new_user)
        db.session.commit()
        return redirect('/login')



    return render_template('register.html')

@app.route('/login',methods=['GET','POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        user = User.query.filter_by(email=email).first()
        
        if user and user.check_password(password):
            session['email'] = user.email
            return redirect('/dashboard')
        else:
            return render_template('login.html',error='Invalid user')

    return render_template('login.html')


@app.route('/room_form', methods=['POST'])
def room_form():
    if 'email' not in session:
        # User is not logged in, redirect to login page
        return redirect('/login')

    user = User.query.filter_by(email=session['email']).first()
    if user:
        form_data = request.form
        new_preference = RoommatePreference(
            user_id=user.id,
            name=form_data['name'],
            email=form_data['email'],
            phone=form_data['phone'],
            room_type=form_data['roomType'],
            block_preference=form_data['roommateNumber'],
            branch_preference=form_data['branchPreference'],
            class_slot=form_data['classSlot'],
            additional_preferences=form_data['additionalPreferences']
        )
        db.session.add(new_preference)
        db.session.commit()
        return redirect('/submitted_preferences')  # Or wherever you want to redirect after submission
    else:
        return redirect('/login')
    # return render_template('room_form.html')
    
@app.route('/room')
def room():
    if 'email' not in session:
        return redirect('/login')
    
    user = User.query.filter_by(email=session['email']).first()
    if user:
        # Pass the user's details to the template
        return render_template('room.html', user=user)
    else:
         return redirect('/login')



@app.route('/submitted_preferences')
def submitted_preferences():
    if 'email' not in session:
        return redirect('/login')

    current_user = User.query.filter_by(email=session['email']).first()
    if not current_user:
        return "User not found", 404

    filled_preferences = RoommatePreference.query.join(User).filter(
        RoommatePreference.user_id != current_user.id,
        User.gender == current_user.gender,
        RoommatePreference.room_type.isnot(None),
        RoommatePreference.phone.isnot(None),
        RoommatePreference.block_preference.isnot(None),
        RoommatePreference.branch_preference.isnot(None),
        RoommatePreference.class_slot.isnot(None),
        RoommatePreference.additional_preferences.isnot(None)
    ).all()

    preferences_data = [
        {
            "name": pref.name,
            "contactDetails": pref.phone,
            "branch": pref.branch_preference,
            "special": pref.class_slot,
            "email": pref.email,
            "note": pref.additional_preferences,
            "bed_count_pref": pref.room_type,
            "block_pref": pref.block_preference,
        }
        for pref in filled_preferences
    ]
    # print(preferences=jsonify(preferences_data).data.decode('utf-8'))
    return render_template('room_pre.html', preferences=jsonify(preferences_data).data.decode('utf-8'))

@app.route('/dashboard')
def dashboard():
    if 'email' in session:
        user = User.query.filter_by(email=session['email']).first()
        user_block = user.block if user else None
        warden = next((item['warden'] for item in BLOCKS_JSON if item['block'] == user_block), None)
        return render_template('dashboard.html', user=user, warden=warden)
    
    return redirect('/login')

@app.route('/logout')
def logout():
    session.pop('email',None)
    return redirect('/login')

if __name__ == '__main__':
    app.run(debug=True)



