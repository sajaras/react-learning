export const getCurrentDate = () => {
    let yourDate = new Date()
return yourDate.toISOString().split('T')[0];

}