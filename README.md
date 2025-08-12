# Courseware-An-Academic-Backup-Resource-Web-Platform-for-University-Students

## 🔍 Motivation
In academic settings, students often face challenges in keeping up with classroom learning due to unavoidable reasons such as illness, emergencies, or scheduling conflicts. As a result, they may miss important lectures, which directly impacts their understanding of course content. Additionally, in complex or concept-heavy subjects, students often struggle to retain everything taught in class and find themselves needing to revisit those topics later.

While platforms like YouTube and other online resources offer some support, they are not always aligned with the specific course structure, syllabus, and academic expectations of an institution. These general-purpose resources may lack the depth, accuracy, or contextual relevance needed for academic success.

To bridge this gap and create a more structured, syllabus-oriented academic support system, we have developed a dedicated academic courseware platform. This system allows students to revisit lecture videos, access course descriptions, review learning outcomes, and now also download additional study materials such as **previous year questions** and **course lecture PDFs** — all aligned with their specific curriculum.

By providing consistent and centralized access to academic materials, the platform helps students learn at their own pace and ensures they stay aligned with classroom teaching — even when absent.

---

## 🛠️ Project Description
This is a **full-stack academic courseware system** built using the **MERN stack** (MongoDB, Express.js, React, Node.js) along with **Tailwind CSS** and **shadcn/ui** for modern, responsive UI components.

The system consists of two major modules:
- **Student Module**
- **Admin (Instructor) Module**

---

## 👩‍🎓 Student Module Features

### 🔑 Authentication
- Combined **Login-Signup** page where new users can register and then log in.

### 📚 All Courses Page
- Displays all available courses from eight semesters in a clean, organized layout.

### 🎯 Filter Course Page
- Filter courses based on:
  - **Category:** Departmental or Non-departmental
  - **Type:** Theoretical or Sessional
  - **Year-Semester:** From 1st Year – 1st Semester to 4th Year – 2nd Semester
- Displays a **“No Course Found”** message if no course matches the selected criteria.

### 📄 Course Details Page
- Displays:
  - Course Description
  - Course Outcomes
  - List of Lectures

### ▶️ Lecture Playback
- Students can watch lecture videos streamed from **Cloudinary**, using video IDs stored in **MongoDB**.

### 📄 New Feature – Additional Learning Resources
- **Previous Year Questions:** Browse and view past exam papers in PDF format.
- **Course Materials:** Access and download lecture slides, notes, and other PDFs.
- Two new **header buttons** redirect students to dedicated resource pages.

---

## 👨‍💼 Admin (Instructor) Module Features

### 👥 User Management
- Displays a table of all registered users with their names and email addresses.
- Admin can delete users if necessary.

### 📘 Course Management
- View, edit, or delete existing courses.
- **Create New Course** button opens a 3-step course creation workflow.

#### 📝 Course Creation Workflow (3-Step Form)
1. **Course Curriculum Page**
   - Bulk upload, delete, or replace lecture videos.
   - Videos uploaded to **Cloudinary** with public IDs saved in **MongoDB**.
2. **Course Landing Page**
   - Enter course metadata:
     - Course Number (e.g., CSE 3200)
     - Title, Credit, Subtitle, Description, Outcomes, Welcome Message
     - Select Category, Type, and Year-Semester
3. **Course Settings Page**
   - Upload a course image (stored in Cloudinary and linked via MongoDB).

⚠️ All fields must be filled before submitting a new course.

---

### 📄 New Feature – PDF Upload for Additional Resources
- Instructors have **two extra dashboard buttons**:
  - **Course Materials**
  - **Previous Year Questions**
- Clicking redirects to dedicated pages where instructors can:
  - Upload PDFs via **Multer** (stored locally on the server)
  - View uploaded PDFs in a table
  - Delete PDFs if needed

---

## 🎥 Demo Video
[![Watch the video](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://youtu.be/YOUR_VIDEO_ID)  
*(Click the image to watch the demo)*

---

## 🖼️ Project Images
| Screenshot 1 | Screenshot 2 | Screenshot 3 | Screenshot 4 |
|--------------|--------------|--------------|--------------|
| ![Image1](images/img1.png) | ![Image2](images/img2.png) | ![Image3](images/img3.png) | ![Image4](images/img4.png) |

| Screenshot 5 | Screenshot 6 | Screenshot 7 | Screenshot 8 |
|--------------|--------------|--------------|--------------|
| ![Image5](images/img5.png) | ![Image6](images/img6.png) | ![Image7](images/img7.png) | ![Image8](images/img8.png) |

| Screenshot 9 | Screenshot 10 | Screenshot 11 | Screenshot 12 |
|--------------|---------------|---------------|---------------|
| ![Image9](images/img9.png) | ![Image10](images/img10.png) | ![Image11](images/img11.png) | ![Image12](images/img12.png) |

| Screenshot 13 | Screenshot 14 | Screenshot 15 | Screenshot 16 |
|---------------|---------------|---------------|---------------|
| ![Image13](images/img13.png) | ![Image14](images/img14.png) | ![Image15](images/img15.png) | ![Image16](images/img16.png) |

---

## 🚀 How to Run This Project

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
