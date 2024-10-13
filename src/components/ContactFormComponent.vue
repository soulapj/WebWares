<template>
    <section class="contact">
        <div class="contact-info">
            <h1>WebWares</h1>
            <ul>
                <li><strong>SIRET :</strong> 123 456 789 00010</li>
                <li><strong>Adresse :</strong> 123 Rue de la République, 75001 Paris, France</li>
                <li><strong>Téléphone :</strong> +33 1 23 45 67 89</li>
                <li><strong>Email :</strong> contact@webwares.com</li>
            </ul>
            <div class="logo">
                <img src="../assets/logo.png" alt="logo">
            </div>
        </div>
        <div class="contact-form">
            <form @click.prevent="">
                <div class="form-row">
                    <div class="form-group">
                        <label for="first-name">Prenom*</label>
                        <input type="text" id="first-name" placeholder="Votre prenom">
                    </div>
                    <div class="form-group">
                        <label for="last-name">Nom*</label>
                        <input type="text" id="last-name" placeholder="Votre nom">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="email">Email*</label>
                        <input type="email" id="email" placeholder="Votre email">
                    </div>
                    <div class="form-group">
                        <label for="phone">Téléphone </label>
                        <input type="text" id="phone" placeholder="Votre téléphone">
                    </div>
                </div>

                <div class="form-group">
                    <label for="subject">Suje*</label>
                    <input type="text" id="subject" placeholder="Votre suje ici">
                </div>

                <div class="form-group">
                    <label for="message">Message*</label>
                    <textarea id="message" placeholder="Votre message"></textarea>
                </div>

                <div class="form-group">
                    <button type="submit" class="submit-btn">Envoyer</button>
                </div>
            </form>
        </div>

    </section>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods() {

    }
}
</script>

<style scoped>
.contact {
    display: flex;
    justify-content: space-evenly;
    background-color: var(--color-primary);
    color: var(--color-secondary);
    padding: 2rem 0;
}

.contact h1 {
    font-size: 2rem;
}

ul {
    font-size: 1.5rem;
}

li {
    list-style: none;
    line-height: 2;
}

.logo {
    text-align: center;
}

img {
    width: 16rem;
}

.contact-form {
    background-color: var(--color-background);
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-row {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}

.form-group {
    flex: 1;
    display: flex;
    flex-direction: column;
}

form label {
    margin-bottom: 5px;
    font-weight: bold;
    color: var(--color-secondary);
}

form input,
form textarea {
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid var(--color-primary);
    border-radius: 8px;
    background-color: #f9f9f9;
    outline: none;
    transition: border-color 0.3s;
}

form input:focus,
form textarea:focus {
    border-color: var(--color-secondary);
}

form textarea {
    resize: vertical;
    height: 8rem;
}

.submit-btn {
    padding: 1rem 2rem;
    background-color: var(--color-secondary);
    color: #fff;
    font-size: 1rem;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.submit-btn:hover {
    background-color: var(--color-background);
    border: 2px solid var(--color-secondary);
    color: var(--color-secondary);
    font-weight: bold;
}

@media (max-width: 768px) {
    .form-row {
        flex-direction: column;
    }
}
</style>