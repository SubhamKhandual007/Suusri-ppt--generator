🤖 AI-Powered PPT Generator using Flask
An intelligent web-based PowerPoint Generator that uses AI and Flask to automatically create professional presentation slides from user input. Ideal for students, professionals, educators, and anyone who wants to turn raw ideas into polished presentations in seconds.

🌟 Key Features
🧠 AI Content Generation: Automatically summarizes topics and generates bullet points using NLP models (e.g., OpenAI GPT, Hugging Face).

🎨 Dynamic PPT Creation: Builds PowerPoint slides on the fly using python-pptx.

🖥️ User-Friendly Web Interface: Simple Flask-powered form to input topic, content, or keywords.

📥 Downloadable PPTX: Instantly download the generated .pptx file.

🔁 Multi-slide Generation: Supports creation of multiple slides based on section headings or input length.

📌 How It Works
The user enters a topic, raw text, or bullet points.

AI processes and summarizes the content (optional step if using GPT or similar models).

Flask app generates slides with formatted titles and bullet points.

The user can download the .pptx file directly.

🛠️ Tech Stack
Python

Flask

python-pptx

OpenAI GPT / Hugging Face Transformers

HTML / CSS / JS

📂 Project Structure
cpp
Copy
Edit
ai-ppt-generator/
├── app.py
├── static/
│   └── style.css
├── templates/
│   └── index.html
├── utils/
│   └── ai_generator.py
├── requirements.txt
└── README.md
