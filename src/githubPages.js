var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/anish-lakkapragada/Around.git', // Update to point to your repository  
        user: {
            name: 'Anish', // update to use your name
            email: 'anish.lakkapragada@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)