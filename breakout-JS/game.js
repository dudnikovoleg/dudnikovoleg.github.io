(function ($) {
	$(document).ready(function () {



var canvas = $('#breakout-game')[0];
var context = canvas.getContext("2d");

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;


var arrtext = {
    column1: [
        'MNPI',
        'Industry Chatter',
        'Compliance Risk',
        'Proprietary Info'
    ],
    column2: [
        'Confidential Info',
        'MNPI',
        'Industry Chatter',
        'Compliance Risk'
    ],
    column3: [
        'Industry Trading',
        'Confidential Info',
        'MNPI',
        'Industry Chatter'
    ],
    column4: [
        'Corp. espionage',
        'Insider Trading',
        'Confidential Info',
        'MNPI'
    ],
    column5: [
        'Proprietary Info',
        'Corp. espionage',
        'Insider Trading',
        'Confidential Info'
    ],
    column6: [
        'Compliance Risk',
        'Proprietary Info',
        'Corp. espionage',
        'Insider Trading'
    ]
};



var setting = {
	ballColor : "#eee",
	ballRadius : 10,

	paddleHeight: 10,
	paddleWidth: 120,

	frameSpeed : 10,

	paddleMoveLeft: false,
	paddleMoveRight: false,
	paddleMoveRate: 4,

	paddleX: 270,
	paddleY: 420,

	gameState: true,
	deathNumber: 0,
	deathTotal: 2,

	lostMessage: "You've lost the game. Would you like to play again?",
	wonMessage: "You've beaten the game. Would you like to improve on your credits?",

	currentScore: 0,
	brickScore: 20,
	paddleScore: 10
};

var x = canvasWidth/2, y = 200;
var dx = 0.5, dy = 4;

var bricks = {
	row		: 4,
	column	: 6,
	color   : "#ffc500",
	height  : 20,
	width 	: undefined,
	padding	: 2
};

var gameStart, brick, restart, 
	totalBricks = bricks.row * bricks.column;

var img = new Image();

function drawBall() {



var heartLangth = $('.heart-o').length;

    switch(heartLangth) {
        case 1:
            img.src = src = "img/P2-ball.png";
            break;
        case 2:
            img.src = src = "img/P3-ball.png";
            break;
        case 3:
            img.src = src = "img/P4-ball.png";
            break;
        default:
            img.src = src = "img/P1-ball.png";
    }

	context.clearRect(0, 0, canvasWidth, canvasHeight);
	context.beginPath();
	context.arc(x, y, setting.ballRadius, 0, 2 * Math.PI, true);
	context.closePath();
	context.fillStyle = setting.ballColor;

    context.fill();

    context.drawImage(img, x - 10, y - 10, 20, 20);

    x += dx;
	y += dy;


}

function drawPaddle() {
	if(setting.paddleMoveLeft && setting.paddleX >= 0) {
		setting.paddleX -= setting.paddleMoveRate;
	}
	if(setting.paddleMoveRight && setting.paddleX <= canvasWidth - setting.paddleWidth) {
		setting.paddleX += setting.paddleMoveRate;
	}

	context.fillStyle = '#2c3e50';
	context.fillRect( setting.paddleX, setting.paddleY, setting.paddleWidth, setting.paddleHeight);
}

function movePaddle() {
	$(document).on('keydown', function(e){
		if( e.keyCode == 39 ) {
			setting.paddleMoveRight = true;
		} else if( e.keyCode == 37 ) { 
			setting.paddleMoveLeft = true;			
		}
	}).on('keyup', function(e){
		if( e.keyCode == 39 ) {
			setting.paddleMoveRight = false;
		} else if( e.keyCode == 37 ) { 
			setting.paddleMoveLeft = false;			
		}
	});
}

function initBricks() {

    brick = new Array(bricks.column);

	for( i = 0; i < bricks.column; i++ ) {
		brick[i] = new Array(bricks.row);
		for( j = 0; j < bricks.row; j++ ) {
			brick[i][j] = { x : 0, y : 0, state : true };
        }
	}
}

function drawBricks() {

    bricks.width = ( (canvasWidth) / bricks.column) - 2;
	for( i = 0; i < bricks.column; i++ ) {
		for( j = 0; j < bricks.row; j++ ) {
				if ( brick[i][j].state ) {

				var brickX = i * (bricks.width + bricks.padding);
				var brickY = j * (bricks.height + bricks.padding);

				brick[i][j].x = brickX;
				brick[i][j].y = brickY;



				context.beginPath();
				context.rect( brickX, brickY, bricks.width, bricks.height);
                    context.textBaseline = "center";

                    context.textAlign="center";

                    if( j == 0) {
					context.fillStyle = '#00AAE7';
                } else if( j == 1 ) {
					context.fillStyle = '#4CBEA0';
				} else if( j == 2 ) {
					context.fillStyle = '#5956A5';
				} else {
					context.fillStyle = '#EA5329';
				}

                    context.fill();
				context.closePath();
			}
		}

        for( j = 0; j < bricks.row; j++ ) {
            if ( brick[i][j].state ) {

                var brickX = i * (bricks.width + bricks.padding);
                var brickY = j * (bricks.height + bricks.padding);

                var textY =  brickY + 13;
                var textX =  brickX + bricks.width / 2;
                context.fillStyle = "#eee";
                context.font = 'normal 10px Helvetica';

                switch (i) {
                    case 0:
                        if (arrtext.column1[j] === "MNPI") {
                            context.font = 'normal 14px Helvetica';
                            context.fillText(arrtext.column1[j], textX, textY + 2);
                        }
                        else {
                            context.font = 'normal 10px Helvetica';
                            context.fillText(arrtext.column1[j], textX, textY);
                        }

                        break;
                    case 1:

                        if (arrtext.column2[j] === "MNPI") {
                            context.font = 'normal 13px Helvetica';
                            context.fillText(arrtext.column2[j], textX, textY + 2);
                        }
                        else {
                            context.font = 'normal 10px Helvetica';
                            context.fillText(arrtext.column2[j], textX, textY);
                        }
                        break;
                    case 2:
                        if (arrtext.column3[j] === "MNPI") {
                            context.font = 'normal 14px Helvetica';
                            context.fillText(arrtext.column3[j], textX, textY + 2);
                        }
                        else {
                            context.font = 'normal 10px Helvetica';
                            context.fillText(arrtext.column3[j], textX, textY);
                        }
                        break;
                    case 3:
                        if (arrtext.column4[j] === "MNPI") {
                            context.font = 'normal 14px Helvetica';
                            context.fillText(arrtext.column4[j], textX, textY + 2);
                        }
                        else {
                            context.font = 'normal 10px Helvetica';
                            context.fillText(arrtext.column4[j], textX, textY);
                        }
                        break;
                    case 4:
                        if (arrtext.column5[j] === "MNPI") {
                            context.font = 'normal 14px Helvetica';
                            context.fillText(arrtext.column5[j], textX, textY + 2);
                        }
                        else {
                            context.font = 'normal 10px Helvetica';
                            context.fillText(arrtext.column5[j], textX, textY);
                        }
                        break;
                    case 5:
                        if (arrtext.column6[j] === "MNPI") {
                            context.font = 'normal 14px Helvetica';
                            context.fillText(arrtext.column6[j], textX, textY + 2);
                        }
                        else {
                            context.font = 'normal 10px Helvetica';
                            context.fillText(arrtext.column6[j], textX, textY);
                        }
                        break;
                }
            }
        }
    }
}

function brickCollision() {

    for( n = 0; n < bricks.column; n++ ) {
		for( k = 0; k < bricks.row; k++ ) {

			var currentBrick = brick[n][k];
            if(currentBrick.state) {
				if( x > currentBrick.x && x < currentBrick.x + bricks.width && y > currentBrick.y && y < currentBrick.y + bricks.height ) {
					dy = -dy;
                    currentBrick.state = false;
					setting.currentScore += setting.brickScore;
					$('.instr').text('Credits : ' + setting.currentScore);
					totalBricks -= 1;
                }
			}
		}
	}
}

function boundaryCollision() {

    if( y - setting.ballRadius <= 0) {
		dy = -dy;
    }

	else if ( y + setting.ballRadius >= canvasHeight) {

		var fullBallLeft = x + setting.ballRadius;
		var fullBallRight = x - setting.ballRadius;


		if( fullBallLeft >= setting.paddleX && fullBallRight < setting.paddleX + setting.paddleWidth) {
			dx = 8 * ( ( x - (setting.paddleX + setting.paddleWidth/2) ) / setting.paddleWidth);
			dy = Math.sqrt( 20 - ( dx * dx) );
			dy = -dy;


			if( setting.currentScore > 0 ) {
				setting.currentScore -= setting.paddleScore;
			}
			$('.instr').text('Credits : ' + setting.currentScore);
		} 
		else {
			clearInterval(gameStart);
			setting.gameState = false;
		}
	}

	if( y + setting.ballRadius > canvasHeight + 15) {
		clearInterval(gameStart);
		setting.gameState = false;
	}

	if( x + setting.ballRadius >= canvasWidth || x - setting.ballRadius <= 0) {
		dx = -dx;
	}
}

function loseTurnCallback() {
	$('.life .heart').eq(setting.deathNumber).addClass('heart-o');
	
	setTimeout(function(e){ 
		$('.instr-footer small').text('Press any keys to restart the game.');
		setting.deathNumber += 1;

		x = canvasWidth/2; 
		y = 200;
		setting.paddleX = 270;

		drawBall();
		drawBricks();
		drawPaddle();
		setting.gameState = true;

		$(document).on('keyup', function(e) {
			gameStart = setInterval( init , setting.frameSpeed);
			$(this).off('keyup');
			$('.instr-footer small').text('');
		});


	}, 400);
}

function loseGameCallback() {
	modalPopup(setting.lostMessage, "Game Over !");
}

function initSpacebar() {
	$(document).on('keyup', function(e) {
		if( e.keyCode == 32 && setting.deathNumber < setting.deathTotal ) {
			gameStart = setInterval( init , setting.frameSpeed);
			$('.instr-footer small').text('');

			// Only allows one-time click on document load
			$(this).off('keyup');
		}
	});
} 

function gameWon() {
	clearInterval(gameStart);
	$('.modal-box h3').after("<p class='modal-score'>Credits : " + setting.currentScore + "</p>");
	modalPopup(setting.wonMessage, "Well done !");
	drawBall();
	drawPaddle();
}

function modalPopup(message, header) {
	$('.modal-message').text(message);
	$('.modal-box h3').text(header);

	setTimeout(function(){
		$('.modal-overlay').show();
		$('body').addClass('game-over');
	}, 100);

	$('.btn-play-again').on('click', function(e){
		e.preventDefault();
		location.reload();
	});
}

function init() {
	if( setting.gameState == true ) {
		drawBall();
	}

	boundaryCollision()
	drawPaddle();
	drawBricks();
	movePaddle();
	brickCollision();

	if( setting.gameState == false && setting.deathNumber < setting.deathTotal ) {
		loseTurnCallback();
	} else if( setting.gameState == false && setting.deathNumber == setting.deathTotal ) {
		loseGameCallback();
	}

	if( totalBricks == 0 ) {
		gameWon();
	}
}

initBricks();
init();
initSpacebar();


    })
})(jQuery);
