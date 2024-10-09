RemotePathy

**RemotePathy** is a platform designed to bridge the gap between job seekers and remote job opportunities. It offers a tailored job recommendation system that suggests relevant job listings based on a user's resume, location, and other preferences. Our mission is to streamline the remote job search experience for users, particularly recent graduates and professionals seeking flexible work environments.

## Features

- **Job Listings:** Browse curated remote job opportunities from various industries.
- **Resume Upload:** Add your resume to receive personalized job recommendations.
- **Job Recommendation System:** Uses AI and ML algorithms to suggest jobs based on your skills, experience, location, and salary preferences.
- **Authentication System:** Secure login, signup, and profile management for users.
- **Job Search Filters:** Filter job listings by industry, location, salary range, and more.
- **Third-Party API Integration:** Aggregates remote job postings from other websites using their APIs.
- **Resources Section:** A repository of guides, tips, and articles to help users improve their remote work experience.

## Technologies

- **Backend:** Django, Django REST Framework (DRF)
- **Frontend:** React.js
- **Database:** MySQL
- **Machine Learning:** Python, Scikit-learn (for job recommendation system)
- **APIs:** Integration with third-party job platforms

## Setup Instructions

### Prerequisites

- Python 3.x
- Node.js and npm
- MySQL
- Virtual Environment (optional)

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Blessman-Newton/remote-path.git
   cd remote-path
   ```

2. **Create a virtual environment**:
   ```bash
   python -m venv env
   source env/bin/activate  # For Windows, use `env\Scripts\activate`
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure MySQL database**:
   - Set up a MySQL database and update the `DATABASES` setting in `settings.py` with your credentials.
   
5. **Run database migrations**:
   ```bash
   python manage.py migrate
   ```

6. **Create a superuser**:
   ```bash
   python manage.py createsuperuser
   ```

7. **Start the Django server**:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install frontend dependencies**:
   ```bash
   npm install
   ```

3. **Start the React development server**:
   ```bash
   npm start
   ```

### Machine Learning Setup

1. **Navigate to the `ml` directory**:
   ```bash
   cd ml
   ```

2. **Install ML dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the ML scripts** to train and evaluate the job recommendation model.

## Authors
Blessman Newton - GitHub
Lead Developer, Backend, Machine Learning Systems and API Integrations Specialist

## Contributing

Contributions are welcome! To get started:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m "Add a new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or support, please email us at **blessmannewton0@gmail.com**.

