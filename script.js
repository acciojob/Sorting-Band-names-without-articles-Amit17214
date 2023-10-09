//your code here
 function sortBandNames(bandNames) {
            // Define articles to be excluded
            const articles = ['a', 'an', 'the'];

	 // Sort the band names without articles
            const sortedNames = bandNames.sort((a, b) => {
                const nameA = a.toLowerCase();
                const nameB = b.toLowerCase();

				
                // Helper function to remove articles
                const removeArticles = name => {
                    for (const article of articles) {
                        if (name.startsWith(article + ' ')) {
                            return name.slice(article.length + 1); // +1 to remove the space
                        }
                    }
                    return name;
                };


				// Compare names without articles
                const compareA = removeArticles(nameA);
                const compareB = removeArticles(nameB);

                return compareA.localeCompare(compareB);
            });

            return sortedNames;
        }

		// Array of band names
        let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Aerosmith'];

        // Sort the band names without articles
        const sortedBandNames = sortBandNames(bandNames);

        // Get the 'ul' element by its id
        const bandList = document.getElementById('band');

        // Add sorted band names to the 'ul' element
        for (const name of sortedBandNames) {
            const listItem = document.createElement('li');
            listItem.textContent = name;
            bandList.appendChild(listItem);
        }
