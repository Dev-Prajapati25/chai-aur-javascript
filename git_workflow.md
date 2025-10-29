# 🧭 Daily GitHub Workflow

Follow these steps every day to keep your local repo synced with GitHub.

---

## ⚙️ Step 1: Pull the latest changes
Always start by updating your local repo:
```bash
git pull origin main
```

---

## 🔍 Step 2: Check status
See which files have been modified, added, or deleted:
```bash
git status
```

---

## ✏️ Step 3: Stage your changes
After editing or creating files, stage them for commit:
```bash
git add .
```
Or add specific files:
```bash
git add README.md script.py
```

---

## 💾 Step 4: Commit your changes
Save your changes with a short, clear message:
```bash
git commit -m "Update README with new info"
```

---

## 🚀 Step 5: Push your changes
Upload your commits to GitHub:
```bash
git push origin main
```

---

## 🔁 Step 6: Repeat
Whenever you make new changes, just run:
```bash
git add .
git commit -m "Your message"
git push origin main
```

---

## 🧠 Optional Advanced Steps

### Create a new branch (for features or experiments)
```bash
git checkout -b feature-new-ui
```

### Switch back to main
```bash
git checkout main
```

### Merge your branch into main
```bash
git merge feature-new-ui
git push origin main
```

---