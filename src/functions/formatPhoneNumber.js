export function formatPhoneNumber(phone, country = 'russia') {
    if (phone) {

        if (country === 'belorussia' || country === 'tashkent') {
            return phone.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5');
        }

        return phone.replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5');
    }
}
