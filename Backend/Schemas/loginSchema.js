export const createLoginSchema={
    username:{
        notEmpty:{errorMessage:"username must provided"},
    },
    password:{
        notEmpty:{errorMessage:"password can't be empty"}
    }
}