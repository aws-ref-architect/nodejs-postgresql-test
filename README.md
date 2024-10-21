# nodejs-postgresql-test
Test knowledge for interview prep with basic NodeJS app and basic PostgreSQL schema.

# Setup

1. Setup / Install Backend app:
npm install
npm install --save -g pg
npm install --save -g knex
// Create baseline for Postgres integration.
knex init

2. Setup Database:
npm database install
source .env.local
npm database start

# Helper Docs

https://gist.github.com/kkemple/9b810e98dd9caa669580
https://gist.github.com/kkemple/9b810e98dd9caa669580
https://knexjs.org/guide/migrations.html
https://gist.github.com/NigelEarle/80150ff1c50031e59b872baf0e474977
https://www.google.com/search?q=aws-reference-architect&sca_esv=f1335be37f2cdbad&ei=I3sVZ8C2M9_IwN4Pqv2CmQc&ved=0ahUKEwiA1N6x-J2JAxVfJNAFHaq-IHMQ4dUDCA8&uact=5&oq=aws-reference-architect&gs_lp=Egxnd3Mtd2l6LXNlcnAiF2F3cy1yZWZlcmVuY2UtYXJjaGl0ZWN0MgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHMgQQABhHSMQJUJECWJECcAF4ApABAJgBAKABAKoBALgBA8gBAPgBAZgCAqACCcICChAAGLADGNYEGEeYAwDiAwUSATEgQIgGAZAGCJIHATKgBwA&sclient=gws-wiz-serp&safe=active&ssui=on