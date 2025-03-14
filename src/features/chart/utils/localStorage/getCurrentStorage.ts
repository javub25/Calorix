
export const getCurrentStorage = () => {
    const currentPie = JSON.parse(localStorage.getItem('sportData') || '[]');
    return {currentPie};
}