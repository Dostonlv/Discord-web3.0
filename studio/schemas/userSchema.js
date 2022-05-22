export const userSchema = {
    name: 'users',
    type: 'document',
    title: 'Users',
    fields:[
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'walletAddress',
            type: 'string',
            title: 'Wallet Address',
        },
        {
            name: 'profilImage',
            type: 'image',
            title: 'Profile Image',
        }
    ]
}