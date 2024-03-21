# CI / CD

## Github

### Configuration

Notre action va être déclenchée à chaque push sur la branche `main`.

Il faut autoriser les actions à créer des branches / et push

- Settings => Actions => General
  - Workflow permissions 
    - Read and write permision

## Activer Github Pages

- Settings => Pages
  - Build and deployment
    - Source: Deploy from a branch
    - Branch: gh-pages
