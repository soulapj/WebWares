// authMixin.js ===============TEST=================


import { mapState } from "vuex";

export const authMixin = {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories,
      currentUser: (state) => state.utilisateurs.find(user => user.id === 1),
    }),
  },
  methods: {
    logout() {
      this.isLoggedIn = false
    },
    login() {
      this.isLoggedIn = true
    }
  },
  created() {
    // this.isLoggedIn = !!this.currentUser
  },
};
