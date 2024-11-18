import { ref }from 'vue'

export const state : any  = ref({
    login: true,
    register:false,
    tnc: false,
    toggleLogin() {
        this.register = false
        this.login = true
    },
    toggleRegister() {
        this.login = false
        this.register = true
    },
    toggleTnc() {
        this.tnc = !this.tnc
    }
})

interface  CurrentUser {
    token: string,
    user: any  
}

export const currentUser : CurrentUser | any  = ref(null)