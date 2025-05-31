async function getPredictedLabel(landmarks) {
  const landmarkData = landmarks.map(({ x, y }) => [x, y]);

  try {
    const response = await fetch("http://localhost:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ landmarks: landmarkData }),
    });

    const data = await response.json();
    return data.label;
  } catch (error) {
    console.error("API error:", error);
    return null;
  }
}
