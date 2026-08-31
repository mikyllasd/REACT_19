export const UserDetails = ({name, isOnline, hideOffline,
    isPremium,
    isNew,
    role,
}) => {
    if(hideOffline, !isOnline){
        return null
    }

    let roleBadge = null
    if(role === "admin"){
        roleBadge = <span> Admin</span>
    }else if(role === "moderator"){
        roleBadge = <span> Moderator</span>
    }else if(role === "vip"){
        roleBadge = <span> VIP</span>
    }

    return (
        <div>
            <h3>{name}
                {isPremium && <span>WOW</span>}
                {isNew && <span>WOW</span>}
                {role}
            </h3>
            <p>{isOnline ? "Online" : "Offline"}</p>
            <p>{isOnline ? "Available for chat" : "Not Available"}</p>
            {isOnline ? (
                <button>Send Message</button>
            ) : (
                <button>Check back later</button>
            )}
        </div>
    )
  

//     if(isOnline){
//         return(
//             <div>
//                 <h3>{name}</h3>
//                 <p>Online</p>
//                 <p>Available for chat</p>
//                 <span>Send Message</span>
//             </div>
//         )
//     }
//    return (
//         <div>
//             <h3>{name}</h3>
//             <p>Offline</p>
//             <p>Not available</p>
//             <small>Check back later</small>
//         </div>
//    )
}