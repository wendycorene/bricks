function populateResults() 
{
  var x = document.getElementById("results");
  if (x.style.display == "none") 
  {
    x.style.display = "block";
  } else 
  {
    x.style.display = "none";
  }
  document.getElementById("results").innerHTML = "";

  var val = document.getElementById("search").value.toLowerCase().trim();
  var res = val.slice(-1);
  if (res != 0) 
  {
    if (val != "") 
    {
      var counter = 1;
      var table = document.createElement('table');
      var tr = document.createElement('tr');
      var td2 = document.createElement('th');
      var td3 = document.createElement('th');
      var td4 = document.createElement('th');
      var text1 = document.createTextNode('Donor Name');
      var text2 = document.createTextNode('Personalization');
      var text3 = document.createTextNode('Zone');
      td2.appendChild(text1);
      td3.appendChild(text2);
      td4.appendChild(text3);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      table.appendChild(tr);

      for (var x in bricksJSON)
       {
        var toCheck = bricksJSON[x].DonorName.toLowerCase();
        
        if (toCheck.includes(val)){
          var text1 = document.createTextNode(bricksJSON[x].DonorName);
                var text2 = document.createTextNode(bricksJSON[x].Personalization);
                var text3 = document.createTextNode(bricksJSON[x].Zone);
                console.log("in bricks don");
                printmap();
                var doname = bricksJSON[x].DonorName.toLowerCase();
                               
        }
        var doname1=doname;
      }
      for (var x in bricksJSON)
        {
          var toCheck = bricksJSON[x].DonorName.toLowerCase();
          console.log(doname1);
        var word1 = "null";
        var searchword = val.split(" ");
        for (i = 0; i < searchword.length; i++) 
        {
         if (!searchword[i].includes("&")) 
          {
            if (toCheck.includes(searchword[i].trim()) && bricksJSON[x].Personalization != word1)
             {
               if(doname1!=bricksJSON[x].DonorName)
               {
              word1 = bricksJSON[x].Personalization;
                var text1 = document.createTextNode(bricksJSON[x].DonorName);
                var text2 = document.createTextNode(bricksJSON[x].Personalization);
                var text3 = document.createTextNode(bricksJSON[x].Zone);
                console.log("in bricks don+array");
                printmap();
                counter++;
               }
            }
          }
        }
        var brickscount1 = counter;
      }
        
      for (var x in bricksJSON) 
      {

        var descriptioncheck = bricksJSON[x].Personalization.toLowerCase();
        var doname = bricksJSON[x].DonorName.toLowerCase();
        if (descriptioncheck.includes(val))
        {
          if(!doname.includes(val)){
          var text1 = document.createTextNode(bricksJSON[x].DonorName);
                var text2 = document.createTextNode(bricksJSON[x].Personalization);
                var text3 = document.createTextNode(bricksJSON[x].Zone);
                console.log("in bricks person");
                printmap();
        }}
      }
      for (var x in bricksJSON) {
        var descriptioncheck = bricksJSON[x].Personalization.toLowerCase();
        var word1 = "null";
        var searchword = val.split(" ");
        for (i = 0; i < searchword.length; i++)
         {
          if (!searchword[i].includes("&")) 
          {
           if (descriptioncheck.includes(searchword[i]) && bricksJSON[x].Personalization != word1) 
           {
                word1 = bricksJSON[x].Personalization;
                if (!doname.includes(searchword[i])) 
                {
                  var text1 = document.createTextNode(bricksJSON[x].DonorName);
                  var text2 = document.createTextNode(bricksJSON[x].Personalization);
                  var text3 = document.createTextNode(bricksJSON[x].Zone);
                  brickscount1++;
                  console.log("in bricks person+arra");
                  printmap();
                }
              }
            }
          }
        
        var paverscount = brickscount1;

        }
      for (x in paversJSON) 
      {
        var toCheck = paversJSON[x].DonorName.toLowerCase();
        var doname = paversJSON[x].DonorName.toLowerCase();

        if (toCheck.includes(val)){
          var text1 = document.createTextNode(paversJSON[x].DonorName);
          var text2 = document.createTextNode(paversJSON[x].Personalization);
          var text3 = document.createTextNode(paversJSON[x].Zone);
          console.log("in paver name");
          printmap();

        }}

        for (x in paversJSON) {
          var toCheck = paversJSON[x].DonorName.toLowerCase();
        var word1 = "null";
        var searchword = val.split(" ");
        for (i = 0; i < searchword.length; i++) 
        {
          if (!searchword[i].includes("&")) 
          {
              if (toCheck.includes(searchword[i]) && paversJSON[x].Personalization != word1) 
              {
                word1 = paversJSON[x].Personalization;
                var text1 = document.createTextNode(paversJSON[x].DonorName);
                var text2 = document.createTextNode(paversJSON[x].Personalization);
                var text3 = document.createTextNode(paversJSON[x].Zone);
                printmap();
                console.log("in paver name+array");
                paverscount++;
              }
            }
          }
          var Personalizationpaverscount = paverscount;
    
        }

        for (x in paversJSON)
         {
          var PersonalizationCheck = paversJSON[x].Personalization.toLowerCase();
          var doname = paversJSON[x].DonorName.toLowerCase();
          if (PersonalizationCheck.includes(val))
          {
            if(!doname.includes(val))
            {
              var text1 = document.createTextNode(paversJSON[x].DonorName);
              var text2 = document.createTextNode(paversJSON[x].Personalization);
              var text3 = document.createTextNode(paversJSON[x].Zone);
              printmap();
              console.log("in paver personal");
            }}
          }

          for (x in paversJSON) 
          {
            var PersonalizationCheck = paversJSON[x].Personalization.toLowerCase();
          var word1 = "null";
          var searchword = val.split(" ");
          for (i = 0; i < searchword.length; i++)
           {
            if (!searchword[i].includes("&")) 
            {

              if (PersonalizationCheck.includes(searchword[i]) && paversJSON[x].Personalization != word1) 
              {
                word1 = paversJSON[x].Personalization;
                if (!doname.includes(searchword[i]))
                 {
                  var text1 = document.createTextNode(paversJSON[x].DonorName);
                  var text2 = document.createTextNode(paversJSON[x].Personalization);
                  var text3 = document.createTextNode(paversJSON[x].Zone);
                  Personalizationpaverscount++;
                  console.log("in paver persona+array");
                  printmap();
                }
              }
            }
          }
        }
        var paverscounter = Personalizationpaverscount - 1;
        var x = document.createElement("H1");
        var count = document.createTextNode("Total " + paverscounter + " results found for  " + val);
        x.appendChild(count);
        document.getElementById("results").appendChild(x);
   function   printmap()
      {

             var tr = document.createElement('tr');
                var td2 = document.createElement('td');
                var td3 = document.createElement('td');
                var td4 = document.createElement('td');
                td2.appendChild(text1);
                td3.appendChild(text2);
                td4.appendChild(text3);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                table.appendChild(tr);
                var node = document.createElement("p");
                node.appendChild(table);
                document.getElementById("results").appendChild(node);
                var w = text3.textContent.replace(" ", "") + "," + text2.textContent.replace(/\n|\r/g, "").replace(/\"/g, " ");
                tr.setAttribute("onclick", 'showImage(\"' + w + '")');
      }

    }}}

    