document.addEventListener("DOMContentLoaded", function() {
    const getRemediesButton = document.getElementById("get-remedies");
    const ailmentSelect = document.getElementById("ailment-select");
    const remediesSection = document.getElementById("remedies");
    const remediesList = document.getElementById("remedies-list");

    const remediesData = {
        cold: [
    {
        name: "Turmeric Milk",
        description: "Turmeric has antioxidant and anti-inflammatory properties. Add a pinch of turmeric to warm milk and drink before bedtime."
    },
    {
        name: "Warm Salt Water Gargle",
        description: "Mix a teaspoon of salt in warm water and gargle. This can help soothe a sore throat and reduce inflammation."
    },
    {
        name: "Child's Pose (Balasana)",
        description: "Sit on your heels, lower your forehead to the ground, and extend your arms forward. This resting pose can promote relaxation and ease breathing."
    }
],

        cough: [
    {
        name: "Honey and lemon mixture",
        description: " Mix a tablespoon of honey with freshly squeezed lemon juice. Consume this mixture to soothe your throat and reduce coughing."
    },
    {
        name: "Trikonasana",
        description: "Trikonasana (Triangle Pose) can help relieve cough by promoting lung expansion and improving respiratory function. The lateral stretching and deep breathing involved in the pose can help clear congestion and enhance the flow of air, aiding in the removal of irritants from the respiratory system. "

    },
    {
        name: "Ginger Tea",
        description: "Prepare ginger tea by boiling sliced ginger in water. Add honey and lemon for extra flavor. Ginger has anti-inflammatory properties that can help ease cough and congestion."
    }
],

        fever: [
    {
        name: "Stay Hydrated",
        description: "Drinking plenty of fluids, such as water, herbal teas, and clear soups, helps keep your body hydrated and aids in reducing fever."
    },
    {
        name: "Fruits Rich in Vitamin C",
        description: "Consuming fruits like oranges, strawberries, and kiwi that are high in vitamin C can boost your immune system and support recovery."
    },

    {
        name: "Viparita Karani asana",
        description: "Lie on your back with your legs extended up against a wall. This gentle inversion can help improve blood circulation and promote relaxation."
    }
],
       
    };


getRemediesButton.addEventListener("click", function() 
{
        const selectedAilment = ailmentSelect.value;
        const selectedRemedies = remediesData[selectedAilment];
        const ailmentIcon = categoryIcons[selectedAilment];


        const previousIcon = document.querySelector(".category-icon");
        if (previousIcon) 
        {
        previousIcon.remove();
        }


        remediesList.innerHTML = selectedRemedies.map(remedy => `<p>${remedy}</p>`).join("");
        remediesSection.style.display = "block";
        remediesList.insertAdjacentHTML('beforebegin', `<h2 class="${ailmentIcon}"> Remedies</h2>`);

if (selectedRemedies) 
{
const remediesHTML = selectedRemedies.map((remedy, index) => `
    <div class="remedy">
        <h3>${remedy.name}</h3>
        <img src="static/healthcentre/images/${selectedAilment}${index}.webp" alt="${selectedAilment}" class="remedy-image">
        <div class="remedy-description">
            <p>${remedy.description}</p>
        </div>
    </div>
`).join("");

remediesList.innerHTML = remediesHTML;
remediesSection.style.display = "block";
}
});

});

const categoryIcons = {
cold: "category-icon fas fa-snowflake",
cough: "category-icon fas fa-lungs",
fever: "category-icon fas fa-thermometer-half",
};
