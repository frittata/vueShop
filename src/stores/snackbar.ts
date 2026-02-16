import { defineStore } from 'pinia'

export const useSnackbarStore = defineStore('ui', {
  state: () => ({
    snackbar: {
      show: false,
      text: '',
      color: '',
    },
  }),
  actions: {
    showToast(text: string, color: string = 'success') {
      this.snackbar.text = text
      this.snackbar.color = color
      this.snackbar.show = true
    },
  },
})
