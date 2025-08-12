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

**Screenshot 1: Register Page**  
![Register Page](https://github.com/user-attachments/assets/c078406f-2b39-47c9-8bf6-37326e2f59fa)

**Screenshot 2: Home Page**  
*(Add your home page screenshot here)*

**Screenshot 3: Course Filter Page**  
*(Add your course filter screenshot here)*

**Screenshot 4: Course Details Page**  
*(Add your course details screenshot here)*

**Screenshot 5:**  
*(Add screenshot 5 URL here)*

**Screenshot 6: Pre-Requisite Dialog Box**  
![Pre-Requisite Dialog Box](https://github.com/user-attachments/assets/fd7bf60e-72ac-4d9b-be66-310a5f502078)

**Screenshot 7: Play Lecture Video and View Previous Year Questions**  
![Play Lecture Video](https://github.com/user-attachments/assets/d66eb934-b90d-490c-bda2-c3392c80a56b)  
![View Previous Year Questions](https://github.com/user-attachments/assets/1286da33-5fae-4c55-8ea8-240241279ee4)

**Screenshot 8: View Course Materials**  
![View Course Materials](https://github.com/user-attachments/assets/556cfbad-5605-4bd0-aefb-4941156e44d8)

**Screenshot 9: Admin Dashboard**  
![Admin Dashboard](https://github.com/user-attachments/assets/d6b6a089-a4be-492a-91bb-37e540321a8b)

**Screenshot 10: Course Listing Page**  
![Course Listing Page](https://github.com/user-attachments/assets/47331c25-fd02-4e4e-b269-697a3094ba5a)

**Screenshot 11: Course Curriculum Page**  
![Course Curriculum Page](https://github.com/user-attachments/assets/d9101943-096f-4ff3-9560-395b60ec3721)

**Screenshot 12: Course Landing Page**  
![Course Landing Page](https://github.com/user-attachments/assets/2732d4c3-c3e8-47d8-93c8-429db4110b49)

**Screenshot 13: Course Image Page**  
![Course Image Page](https://github.com/user-attachments/assets/9922cb14-2f20-4b9c-bc43-a0f4165fc1e9)

**Screenshot 14: Upload Previous Year Question's PDF**  
![Upload Previous Year Question's PDF](https://github.com/user-attachments/assets/54b2033a-001f-4ce4-9910-df2c9a2fc864)

**Screenshot 15: Upload Course Materials PDFs**  
![Upload Course Materials PDFs](https://github.com/user-attachments/assets/6985cc8c-fd80-4455-b866-555da0e9a155)

---

## 🚀 How to Run This Project

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
