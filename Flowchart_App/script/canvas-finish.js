/**
 * Created by Oleg on 11.07.2017.
 */
// ------------------
// Объект для рисования в канвасе
// HTML5.Canvas
// ------------------
function ExpangeCanvas(canvasid, width, height)
{
    // ------------------
    // Переменные ширины и высоты
    // Хотя canvas ставит значения по-умолчанию 300 на 150
    // ------------------
    width = width || 300;
    height = height || 150;


    // ------------------
    // Находим нужный канвас
    // ------------------
    this.canvas = document.getElementById(canvasid);
    this.obCanvas = null;

    if (this.canvas != null)
    {
        // ------------------
        // Устанавливаем размеры канваса
        // ------------------
        this.canvas.width = width;
        this.canvas.height = height;


        // ------------------
        // Контекст канваса
        // ------------------
        this.obCanvas = this.canvas.getContext('2d');
    }


    // ------------------
    // Рисуем линию
    // ------------------
    this.Line = function(x1, y1, x2, y2, linewidth, strokestyle)
    {
        if (this.obCanvas == null) return false;

        this.obCanvas.beginPath();
        this.obCanvas.lineWidth = linewidth;
        this.obCanvas.strokeStyle = strokestyle;
        this.obCanvas.moveTo(x1, y1);
        this.obCanvas.lineTo(x2, y2);
        this.obCanvas.stroke();
    }


    // ------------------
    // Функция заливает канвас цветом
    // ------------------
    this.SetBgColor = function(bgcolor)
    {
        if (this.obCanvas == null) return false;

        this.obCanvas.fillStyle = bgcolor;
        this.obCanvas.fillRect(0, 0, this.obCanvas.canvas.width, this.obCanvas.canvas.height);
    }
}