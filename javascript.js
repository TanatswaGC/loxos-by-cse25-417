let currentUnit = 'kg';

// This function handles switching between KG and LB
function setUnit(unit) {
    currentUnit = unit;
    
    // Visual feedback: Highlights the active button
    document.getElementById('btnKg').style.borderColor = unit === 'kg' ? '#FFFFFF' : '#333';
    document.getElementById('btnLb').style.borderColor = unit === 'lb' ? '#FFFFFF' : '#333';
    
    // Changes the placeholder text in the input box dynamically
    document.getElementById('liftWeight').placeholder = `Weight (${unit.toUpperCase()})`;
}

// This function runs the actual 1RM math
function calculateStrength() {
    const weight = document.getElementById('liftWeight').value;
    const reps = document.getElementById('liftReps').value;
    const display = document.getElementById('calcResult');

    if (weight > 0 && reps > 0) {
        if (reps > 30) {
            display.innerText = "Max 30 reps for accuracy.";
            return;
        }

        // Brzycki Formula for 1-Rep Max
        const oneRM = weight / (1.0278 - (0.0278 * reps));
        
        // Displays the result with the chosen unit
        display.innerHTML = `ESTIMATED 1RM: <span style="color: #C0C0C0;">${Math.round(oneRM)}${currentUnit}</span>`;
    } else {
        display.innerText = "Enter valid stats.";
    }
}