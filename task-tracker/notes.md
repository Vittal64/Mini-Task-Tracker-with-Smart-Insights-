# Project Notes & Architecture

## 1. Why SQLite?

- Lightweight & file-based — perfect for assignment environment
- Zero setup, fast queries
- Fits the "24-hour build simple DB" requirement

---

## 2. Backend Design

- **Express** chosen for simplicity and clarity
- Routes separated into `tasks.routes.js`
- Database init in `database.js`
- Uses parameterized SQL queries for security & reliability

---

## 3. Task Schema

| Field | Type | Purpose |
|-------|------|--------|
| id | INTEGER PK | Unique task ID |
| title | TEXT | Task title |
| description | TEXT | Details |
| priority | Low/Medium/High | Task importance |
| due_date | TEXT | YYYY-MM-DD format |
| status | Open/In Progress/Done | Task lifecycle |
| created_at | timestamp | Auto-record created time |

---

## 4. Insights Logic

Rule-based (no AI Models):

- Count open tasks
- Count high priority open tasks
- Count tasks due within 3 days
- Generate motivational summary

Rationale: meets assignment "LLM-like logic without using AI" requirement

---

## 5. Frontend Choices

- Simple HTML/CSS + JS
- `fetch()` for REST API interaction
- Dropdown filters + dynamic rendering
- Clear UI for evaluator

---

## 6. Learning Outcomes

- CRUD backend with SQLite
- RESTful API development
- DOM manipulation frontend
- Basic data analytics logic
- Environment setup & documentation

---

## 7. Future Enhancements

- Edit & delete tasks
- User authentication
- Chart insights
- Responsive UI (Bootstrap / Tailwind)
- Deploy using Railway/Render/GitHub Pages

---

Prepared by: **Vittal Bharadwaj**
