export default{
    getUsers: function (){
        return fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
        .then(async results=> {
            const toJson = await results.json()
            return toJson}
            )
    }
}