msg = this ;
dpd.users.get(function(results) {
    results.forEach(function(user) {
       if(user.id != me.id) {
            emit(dpd.users, {id:user.id}, 'newMessage', {content:msg.content});
            console.log("message sent to " + user.id + " " + this.content);
       }
    });
});

