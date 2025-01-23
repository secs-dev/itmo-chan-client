FROM node

WORKDIR /app

COPY ./react-ts/package.json .

COPY ./react-ts/tsconfig.json .

COPY ./react-ts/tsconfig.node.json .

COPY ./react-ts/vite.config.ts .

COPY ./react-ts/.eslintrc.cjs .

COPY ./react-ts/package-lock.json .

COPY ./react-ts .

RUN npm install

RUN npm run build

EXPOSE 80
EXPOSE 4173

CMD ["npm", "run", "preview", "--", "--host"]
