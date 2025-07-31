// 2025





const htmlLinkSign = '&#11023;';

// &#698; // ʺ

// &#11023;
// &#11173;







let htmlNav = '';
arrListCat.forEach( nav => {
	htmlNav += `<div class="btn" data-id="${ nav.id }">${ nav.title }</div>`;
});

nav.innerHTML = htmlNav;





let arrSelected = arrListDevice.filter( k => true );





function showSpoilers( arr ) {

	let htmlSpoilers = '';
	arr.forEach( k_spoiler => {

		let htmlBody = '';
		if ( k_spoiler.keyval ) {

			//console.log( k_spoiler.keyval );

			let htmlTBody = '';
			k_spoiler.keyval.forEach( k_keyval => {

					//console.log( k_keyval );

				if ( k_keyval.backspace ) {
					htmlTBody += `<tr><td class="td-separator" colspan="2">&nbsp;</td></tr>`;

				} else {

					let htmlVal = '';
					if ( k_keyval.href || k_keyval.gps ) {

						if ( k_keyval.href ) 
							htmlVal = `<a href="${ k_keyval.href }" target="_blank">www.${ k_keyval.v }${ htmlLinkSign }</a>`;

						if ( k_keyval.gps ) 
							htmlVal = `<a href="${ k_keyval.gps }" target="_blank">${ k_keyval.v } (GPS${ htmlLinkSign })</a>`;







					}
					else
						htmlVal = k_keyval.v;

					htmlTBody += `<tr><td class="txt-key">${ k_keyval.k }</td><td class="txt-val">${ htmlVal }</td></tr>`;

				}

				//htmlTBody += `<tr><td>${ k_keyval.k }</td><td>${ k_keyval.v }</td></tr>`;
			});

			let htmlTableKeyVal = `<table>
				<thead></thead>
				<tbody>${ htmlTBody }</tbody>
			</table>`;

			htmlBody += `<div>${ htmlTableKeyVal }</div>`;
		}

		let htmlType = '';
		if ( k_spoiler.type  ) 
			htmlType = `<span class="spoiler-title-cat">${ k_spoiler.type }</span> `;
		

		htmlSpoilers += `<div class="spoiler" data-id="${ k_spoiler.id }">
			<div class="spoiler-title">${ htmlType }${ k_spoiler.title }</div>
			<div class="spoiler-body" hidden>${ htmlBody }</div>
		</div>`;
	});

	content.innerHTML = htmlSpoilers;
}

showSpoilers( arrSelected );



nav.addEventListener( 'click', function( e ) {

	if ( e.target.classList.contains( 'btn' )) {

		//let elemParent = e.target.closest( '.spoiler-each' );

		//console.log( e.target.dataset.id );
		//console.log( elemParent.dataset.id );

		//elemParent.querySelector( '.spoiler-body' ).hidden = !elemParent.querySelector( '.spoiler-body' ).hidden;

		//alert();

		let arrSelected = [];

		if ( e.target.dataset.id == 'all' ) {
			arrSelected = arrListDevice.filter( k => true );

		} else {

			arrSelected = arrListDevice.filter( k => {

				if ( k.cat ) {

					if ( k.cat[ e.target.dataset.id ] )
						return true;
				}



			});
		}

		showSpoilers( arrSelected );
	}
});





content.addEventListener( 'click', function( e ) {

	if ( e.target.classList.contains( 'spoiler-title' )) {

		let elemParent = e.target.closest( '.spoiler' );

		//console.log( elemParent );
		//console.log( elemParent.dataset.id );

		elemParent.querySelector( '.spoiler-body' ).hidden = !elemParent.querySelector( '.spoiler-body' ).hidden;
	}
});






