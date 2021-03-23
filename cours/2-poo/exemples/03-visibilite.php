<?php 

class Rectangle {

  private $w;
  public $h;

  public function __construct($w, $h) {
    $this->w = $w;
    $this->h = $h;
  }

  // regagner un accès public en lecture sur la propriété privée w
  public function getW() {
    return $this->w;
  }

  // regagner un accès public en écriture sur la propriété privée w
  public function setW($w) {
    $this->w = $w;
  }
}



$unRectangle = new Rectangle(30, 50);
echo $unRectangle->h; // lecture depuis l'extérieur de la classe OK car la propriété est public;
$unRectangle->h = 70; // écriture depuis l'extérieur de la classe OK car la propriété est public;

//echo $unRectangle->w; // lecture depuis l'extérieur de la classe déclenche une erreur car la propriété est private;
echo $unRectangle->getW();
//$unRectangle->w = 70; // écriture depuis l'extérieur de la classe déclenche une erreur car la propriété est private;
$unRectangle->setW(70);