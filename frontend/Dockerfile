FROM node:alpine
ARG VITE_API_ENDPOINT
ENV VITE_API_ENDPOINT $VITE_API_ENDPOINT

WORKDIR /app
COPY . .
RUN npm install
RUN npx svelte-kit build
CMD ["node","build"]
#CMD ["npm", "run", "dev", "--", "--open", "--host", "0.0.0.0"]