AWS Chat

http://chat.alex75.it.s3-website.eu-central-1.amazonaws.com/
https://chat.alex75.it redirect to the bucket

# AWS S3 web site

To use a S3 bucket for store a website this option must be enbled and configured.  
https://alex75-bucket-1.s3.eu-west-2.amazonaws.com/index.html
The resulting URL is "bucket-name.s3-website-region.amazonaws.com"  
http://alex75-bucket-1.s3-website-eu-west-2.amazonaws.com

# AWS Lambda

+ Free
+ Nice ideas
- to use common function you need to create a module and update it as "layer" and then set the functions to use ite  
  - how to automate the creation, upload of a layer and the setup of functions?
  - how to test the common code locally?
- the creation/upload of layer is cumbersome
- how to test the function locally?
- how to update the function with a continuous delivery?
- Too much laborious and tidious to setup and run and update

# AWS DynamoDB (always free)

+ Free
- One primary key composed by 2 fields, all the search have to use that or a full table scan is executed
- No date time field, you have to use string date or epoch
- How to connect from local to make tests?
- not a good interface
- nightmare to configure permissions

MongoDB atlas is completely free and easiest, I configured the local conenction and 2 different users in 10 minutes !


# AWS SNS  (always free)

Amazon SNS is a fully managed pub/sub messaging and mobile notification service with nearly unlimited throughput.

# AWS SQS (always free)

Amazon SQS is a fully managed and highly scalable message queuing service

# CircleCI

https://circleci.com/dashboard


# Bootstrap

https://getbootstrap.com/docs/4.0/getting-started/introduction/  
https://getbootstrap.com/docs/4.0/getting-started/introduction/#starter-template  


# Angular on S3

https://medium.com/@peatiscoding/here-is-how-easy-it-is-to-deploy-an-angular-spa-single-page-app-as-a-static-website-using-s3-and-6aa446db38ef

# AWS Pricing

## S3
As part of the AWS Free Usage Tier, you can get started with Amazon S3 for free. Upon sign-up, new AWS customers receive 5GB of Amazon S3 storage in the S3 Standard storage class; 20,000 GET Requests; 2,000 PUT, COPY, POST, or LIST Requests; and 15GB of Data Transfer Out each month for one year.



## MSK (Kafka)

I created 2 clusters with the minimum settings.  
NOT used at all.
The day after I received a bill of 14 $ !!!
They said "FREE" !


# Route 53

Not used but billed 0.5 (+ Tax).
Not free.

# SSL

## SSL for free
https://www.sslforfree.com/create?domains=chat.alex75.it


