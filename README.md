# 🛒 Vue Shop

Simple Vue e-commerce using **Vue 3**, **Vite** and **Vuetify**, using mock data from [FakeStoreAPI](https://fakestoreapi.com/).

## 🚀 Features

- **Autenticazione**: login system using `useStorage`.
- **Gestione Stato**: **Pinia** to handle cart, wishlist, snackbar messages and auth.
- **Persistenza Dati**: **VueUse** to persist data.
- **UI/UX**: **Vuetify 3** for responsive layout, icons and feedback.
- **Routing**: Vue Router.

---

## 🛠️ Tech Stack

- **Framework**: [Vue.js 3](https://vuejs.org/) (Composition API)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **UI Library**: [Vuetify 3](https://vuetifyjs.com/)
- **Utilities**: [@vueuse/core](https://vueuse.org/)
- **HTTP Client**: [Axios](https://axios-http.com/)

---

## 📦 Installazione

1.  **Clone repository**:

    ```bash
    git clone [https://github.com/frittata/vueShop.git](https://github.com/frittata/vueShop.git)
    cd vueShop
    ```

2.  **Install dipendenze**:

    ```bash
    npm install
    ```

3.  **Env configuration**:
    Create `.env`:

    ```env
    VITE_API_BASE_URL=[https://fakestoreapi.com](https://fakestoreapi.com)
    ```

4.  **Run application**:
    ```bash
    npm run dev
    ```
