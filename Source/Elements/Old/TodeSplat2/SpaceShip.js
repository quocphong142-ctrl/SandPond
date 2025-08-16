TodeIsFat

element SpaceCarrier {

	colour "gray"
	emissive "blue"
	precise true
	pour false
	category "player"
	
	input r () => Keyboard.ArrowRight
	input l () => Keyboard.ArrowLeft
	input f () => Keyboard.ArrowUp
	input b () => Keyboard.ArrowDown
	input d () => Keyboard[" "]
	
	output S ({space}) => SPACE.setAtom(space, ATOM.make(Fire))
	
	action {
		@ => @ => @
		d    _    S
	}
	
	rule { @r => @__ => __@ }
	rule { l@ => __@ => @__ }
	
	rule top {
		b => _ => @
		@    @    _
	}
	
	rule top {
		@ => @ => _
		f    _    @
	}
	
}




`
