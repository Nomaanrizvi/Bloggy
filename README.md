# 📰 Bloggy — React + Appwrite Blog Platform

**Bloggy** is a modern, full-stack **blog application** built with **React (Vite)** and **Appwrite**.
It enables users to **create, edit, and publish blog posts** with featured images, authentication, and real-time updates — all powered by Appwrite’s backend services.

---

## 🚀 Features

* 🔐 **User Authentication** (Register / Login / Logout)
* ✍️ **Create, Edit & Delete Blog Posts**
* 🖼️ **Upload Featured Images** (via Appwrite Storage)
* 📦 **Appwrite Database Integration**
* ⚡ **Real-Time Post Updates**
* 🎨 **Responsive UI** using **Tailwind CSS**
* 🧩 **Modular & Reusable Components**

---

## 🛠️ Tech Stack

| Category | Technologies                                                  |
| -------- | ------------------------------------------------------------- |
| Frontend | React (Vite), Tailwind CSS, React Router DOM, React Hook Form |
| Backend  | Appwrite (Database, Auth, Storage, Functions)                 |
| Tools    | Vite, ESLint, npm                                             |

---

## 📁 Folder Structure

```
bloggy/
│
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Application pages (Home, PostForm, PostDetails, etc.)
│   ├── appwrite/        # Appwrite service logic (Auth, DB, Storage)
│   ├── store/           # Global context providers
│   ├── features/        # Custom React hooks
│   ├── main.jsx         # Application entry point
│   └── App.jsx          # Root component and routes
│
├── public/
│   └── favicon.ico
│
└── package.json
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/bloggy.git
cd bloggy
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the project root and add your **Appwrite credentials**:

```bash
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

---

## 🧩 Appwrite Setup

1. Go to [Appwrite Cloud](https://cloud.appwrite.io) or self-host Appwrite.
2. Create a **Project** and note your **Project ID**.
3. Create a **Database → Collection** (fields: `Title`, `Content`, `FeaturedImage`, `status`, `userId`).
4. Create a **Storage Bucket** for images.
5. Enable **Email + Password Authentication** under the **Auth** section.
6. Update the `.env` file with your IDs.

---

## 🖥️ Run Locally

```bash
npm run dev
```

Visit **[http://localhost:5173](http://localhost:5173)** to view the app in your browser.

---



## 🧾 Basic Workflow

1. User signs up or logs in via Appwrite Auth.
2. Authenticated users can create posts with title, content, and image.
3. Post data is saved in the Appwrite Database, and images in Storage.
4. Posts are dynamically fetched and displayed in the feed.
5. Users can edit or delete only their own posts.

---


## 🧠 Future Improvements

* 🗂️ Add Categories and Tags
* 💬 Add Comments System
* 👤 User Profiles with authored posts
* 🌙 Dark / Light Theme Toggle
* 🔍 Post Search and Filtering

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

```bash
git checkout -b feature-name
git commit -m "Added new feature"
git push origin feature-name
```

Then open a pull request.

---

## 📄 License

Licensed under the **MIT License**.
See the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author

**Nomaan Rizvi**

* 🌐 [Portfolio](https://nomaandotdev.netlify.app)
* 💼 [LinkedIn](https://www.linkedin.com/in/nomaanrizvi/)
* 💻 [GitHub](https://github.com/Nomaanrizvi)
