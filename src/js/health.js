export default function health(data) {
    if ( data['health'] >= 0 ) {
        if ( data['health'] > 50 ) {
            return "healthy"
        } else if ( data['health'] < 15 ) {
            return "critical"
        } else { return "wounded" }
    } else { return "" }
}