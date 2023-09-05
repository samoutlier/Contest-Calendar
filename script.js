

let url = "https://kontests.net/api/v1/all"

let response = fetch(url);

response.then((value) => {
  return value.json();
}).then((contests) => {
  
  let ihtml = "";
  
  for (item in contests) {
            console.log(contests[item]);
          const startTime = new Date(contests[item].start_time).toLocaleString('en-US', {
              day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    const endTime = new Date(contests[item].end_time).toLocaleString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      });
  
      ihtml += `
      <div class="card mx-2 my-2" style="width: 22rem;">
      <img src="data:image/png;base64,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" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title ">${contests[item].name}</h4>
        <p class="card-text"> Site : <b>${contests[item].site}</b></p>
          <p class="card-text"> Status : <b>${contests[item].status}</b></p>
        <h6 class="card-text"> Starts at : ${startTime} IST</h6>
        <h6 class="card-text"> Ends at : ${endTime} IST</h6>
        <p class="card-text">In 24 Hours: <b>${contests[item].in_24_hours}</b></p>
        <a href="${contests[item].url}" class="btn btn-primary my-3">Visit Site</a>
      </div>
    </div>
    `;
  }

  cardContainer.innerHTML = ihtml;
})
