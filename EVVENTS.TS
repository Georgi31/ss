// @ts-nocheck


/*//ADD EVENT LISTENER (on)
-BallBehavior.ts
protected init(){
    EventDispatcher.getInstance().getDispatcher().on(GameEvents.BRICK_HIT, this.onBrickHit, this);

    private onBrickHit(e: any)
}
*/




//////////////////////////////////////////////////////////////////////////////////////////////////////////




/*
//EMIT
-BrickCollisionBehavior.ts
private wasHit(){
    EventDispatcher.getInstance().getDispatcher().emit(GameEvents.BRICK_HIT, {objId: this.gameObjRef.getId(), brickType: this.brickType, nbrHit: this.totalNbrHit})
   }
*/




////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*
//ADD EVENT LISTENER (on)
BrickColorChangeBehavior.ts
protected init() {
    EventDispatcher.getInstance().getDispatcher().on(GameEvents.BRICK_HIT, this.onBrickHit, this);
    }
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////



/*
//ADD EVENT LISTENER (on)
BrickHideBehavior.ts

protected init() {
        EventDispatcher.getInstance().getDispatcher().on(GameEvents.BRICK_HIT, this.onBrickHit, this);
    }





//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv//
  private onBrickHit(e: any) {           
        if(this.disable) {
            return;
        }

        if(e.objId !== this.gameObjRef.getId()) {
            this.disable = true;
            setTimeout(() => this.disable = false, 500);
            return;
        }

        switch(e.brickType) {
            case BrickType.TYPE_1:
            
            case BrickType.TYPE_3:
                if(e.nbrHit >= 1) {
                    EventDispatcher.getInstance().getDispatcher().off(GameEvents.BRICK_HIT, this.onBrickHit, this);
EMIT->              EventDispatcher.getInstance().getDispatcher().emit(GameEvents.BRICK_HIDE, {objId: this.gameObjRef.getId(), brickType: this.brickType});
                }
                break;
            case BrickType.TYPE_2:
                if(e.nbrHit >= 3) {
                    EventDispatcher.getInstance().getDispatcher().off(GameEvents.BRICK_HIT, this.onBrickHit, this);
EMIT->              EventDispatcher.getInstance().getDispatcher().emit(GameEvents.BRICK_HIDE, {objId: this.gameObjRef.getId(), brickType: this.brickType});
                }
                break;
        }
    }
}
///^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
*/ 
