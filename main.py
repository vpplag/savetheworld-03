def on_forever():
    if input.light_level() < 10:
        basic.show_string("N")
    else:
        basic.show_string("D")
basic.forever(on_forever)
