# TaskFlow - Fullstack Learning Project

A comprehensive fullstack task management application built to master modern web development technologies.

## 🚀 Tech Stack

- **Frontend**: React + TypeScript
- **Backend**: Node.js + TypeScript (Serverless)
- **Database**: AWS DynamoDB (NoSQL) + RDS PostgreSQL (SQL)
- **Cloud**: AWS (Lambda, S3, API Gateway, DynamoDB, RDS)
- **Architecture**: Serverless + Microservices

## 📋 Project Structure

```
taskflow-fullstack/
├── frontend/                 # React + TypeScript
├── backend/                  # Node.js + TypeScript (Lambda functions)
├── infrastructure/           # AWS infrastructure (Serverless Framework)
├── shared/                   # Shared types and utilities
└── docs/                     # Documentation
```

## 🎯 Learning Goals

This project is designed to demonstrate proficiency in:
- Modern frontend development with React and TypeScript
- Backend API development with Node.js
- Serverless architecture on AWS
- Database design (both SQL and NoSQL)
- Cloud infrastructure management
- DevOps and CI/CD practices

## 📚 Getting Started

### Prerequisites
- Node.js 18+
- AWS CLI configured
- AWS Account (free tier)
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/diogobas/taskflow-fullstack.git
cd taskflow-fullstack

# Install frontend dependencies (pnpm recommended)
cd frontend
pnpm install

# Install backend dependencies (pnpm recommended)
cd ../backend
pnpm install

# If you prefer npm instead of pnpm, run `npm install` in each package
```

CI notes
--------
If your CI environment uses Node.js >=16, enable Corepack and use `pnpm` for deterministic installs. Example GitHub Actions step:

```yaml
- name: Enable Corepack + Install deps
	run: |
		corepack enable
		corepack prepare pnpm@latest --activate
		pnpm install --frozen-lockfile
	env:
		NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }} # if you need private registries
```

If you don't have a `pnpm-lock.yaml` yet, generate one locally and commit it to ensure reproducible CI installs:

```bash
cd frontend && pnpm install && git add pnpm-lock.yaml && git commit -m "chore: add pnpm lock"
```

## 🏗️ Project Phases

### Phase 1: Core Features ✅
- [ ] User Authentication
- [ ] Task CRUD Operations
- [ ] File Attachments
- [ ] REST API

### Phase 2: Advanced Features 🚧
- [ ] Real-time Updates
- [ ] Team Collaboration
- [ ] Search & Filtering
- [ ] Analytics Dashboard

### Phase 3: Performance & Scale 📈
- [ ] Caching Layer
- [ ] Image Processing
- [ ] Email Notifications
- [ ] CI/CD Pipeline

## 📖 Documentation

- [Learning Roadmap](./docs/LEARNING_ROADMAP.md)
- [Resources](./docs/RESOURCES.md)
- [API Documentation](./docs/API.md)
- [Architecture](./docs/ARCHITECTURE.md)

## 🤝 Contributing

This is a personal learning project, but feedback and suggestions are welcome!

## 📝 License

MIT

---

**Built with 💻 by [@diogobas](https://github.com/diogobas)**