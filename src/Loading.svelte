<!-- Code for the new pen -->

<div class="container">

	<div class="container__progressbars">

		<div class="progressbar">
			<svg class="progressbar__svg">
				<circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-html shadow-html"> </circle>
			</svg>
			<span class="progressbar__text shadow-html">Loading... </span>
		</div>

	</div>

</div>

<!-- My social networks (imported from another pen)-->
<div id="main-container-social" class="main-container-social"></div>

<style type="text/scss">

    $color-black: hsl(0, 0%, 5%);
    $color-color: blue;
    $color-html: hsl(15, 100%, 60%);

    @function strokeDashoffset($num) {
        @return 440 - (440 * $num) / 100;
    }

    * {
        box-sizing: border-box;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container__progressbars {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        min-width: 270px;
        width: 100%;
        min-height: 100%;
    }

    .progressbar {
        position: relative;
        width: 170px;
        height: 170px;
        margin: 1em;
        transform: rotate(-90deg);
    }

    .progressbar__svg {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .progressbar__svg-circle {
        width: 100%;
        height: 100%;
        fill: none;
        stroke-width: 10;
        stroke-dasharray: 440;
        stroke-dashoffset: 440;
        stroke: blue;
        stroke-linecap: round;
        transform: translate(5px, 5px); // stroke-width / 2
    }


    .circle {
        &-html {
            animation: anim_circle-html 0.5s ease-in-out forwards;
        }
        
    }

    .progressbar__text {
        position: absolute;
        top: 50%;
        left: 50%;
        padding: 0.25em 0.5em;
        font-size: 20px; 
        color: blue;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        border-radius: 0.25em;
        transform: translate(-50%, -50%) rotate(90deg);
    }

    //  @keyframes

    @keyframes anim_circle-html {
        to {
            stroke-dashoffset: strokeDashoffset(100);
        }
    }


</style>