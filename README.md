# Password-service

src/
├── modules/*/
│   ├── user.controller.ts
│   └── user.service.ts
│   ├── dto.ts
│   └── types.d.ts
├── entity/
│   ├── User.ts
│   └── Password.ts
├── routes/
│   ├── user.route.ts
│   └── password.route.ts
├── middleware/
│   └── auth.middleware.ts
├── config/
│   ├── ormconfig.ts
│   └── types.d.ts
└── index.ts
