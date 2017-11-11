module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-23-253-129.compute-1.amazonaws.com',
      key: '~/.ssh/aws_demo.pem',
      ref: 'origin/master',
      repo: 'https://github.com/itpreneur/node.git',
      path: '/home/ubuntu/aws_demo',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
