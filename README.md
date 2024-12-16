# todoApp

This is the Angular project setup with Tailwind CSS, Angular 19, and a custom folder structure.
Edited from new-feature work-tree 

## Folder Structure
```bash
src/
├── app/
│   ├── core/
│   │   ├── services/
│   │   ├── interceptors/
│   │   ├── guards/
│   │   ├── models/
│   │   └── utils/
│   ├── features/
│   │   ├── auth/
│   │   ├── dashboard/
│   ├── shared/
│   │   ├── components/
│   │   ├── directives/
│   │   ├── pipes/
│   ├── app.module.ts
│   ├── app.component.ts
│   ├── app-routing.module.ts
│   └── app.component.html
├── assets/
├── environments/
├── styles/
└── index.html
```

## Tailwind CSS
This project uses **Tailwind CSS** for styling. You can customize the configuration in the  file.

## Setup
To install dependencies, run:
```
npm install
```

To run the project in development mode:
```
ng serve
```

To build the project for production:
```
ng build --prod
```

