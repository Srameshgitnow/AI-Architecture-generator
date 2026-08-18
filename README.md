# AI-Architecture-generator

Monorepo scaffold for an AI Architecture Generator.

- Backend: Node.js + Express (LangGraph integration placeholder)
- Frontend: React (Vite)
- Diagram generation: Mermaid
- Infra: Terraform templates for AWS and Azure

Quick start

1. Backend

```bash
cd C:\ws\AI-Architecture-generator\backend
npm install
npm start
```

2. Frontend

```bash
cd C:\ws\AI-Architecture-generator\frontend
npm install
npm run dev
```

Notes:
- Backend exposes `POST /generate` which accepts JSON `{ "businessRequirements": {"title":"...","description":"..."} }` and returns `mermaid`, `techRecommendations`, and `cloudPlans`.
- Replace the LangGraph placeholder with your LangGraph orchestration flows.
- Customize `infra/` Terraform files for real deployments (add providers, state backend, modules).


