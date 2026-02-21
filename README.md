- How to:
    - cd test_technique_qa
    - npm i
    - npx cypress open






Plan de test
1. Portée
- Pages concernées :

    - Login (/)
    - Products (/inventory.html)
    - Cart (/cart.html)
    - Checkout Step 1 (/checkout-step-one.html)
    - Checkout Overview (/checkout-step-two.html)
    - Confirmation (/checkout-complete.html)

- Actions couvertes :

    - Authentification utilisateur
    - Ajout d'articles au panier (minimum 2)
    - Vérification du contenu panier (articles, quantités, prix)
    - Saisie des informations de livraison
    - Validation des calculs (Item total + Tax = Total)
    - Finalisation de commande et vérification de la confirmation

2. Hypothèses et limites:

| hypothése                            | limite                                |
|--------------------------------------|---------------------------------------|
| Les prix affichés sont stables       | Pas de test de paiement réel (mock)   |
| Un seul navigateur/résolution testés | Pas de tests responsive/mobile        |
| Connexion réseau stable              | Pas de tests de performance ou charge |

3. Risques et contraintes

| risques                              | impact  | mitigation                                       |
|--------------------------------------|---------|--------------------------------------------------|
| Flakiness sur les sélecteurs DOM     | Moyen   | Utiliser des data-test attributes si disponibles |
| Calcul Tax incorrect (arrondi)       | Moyen   | Vérifier la formule de calcul                    |
