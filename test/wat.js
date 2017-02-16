import test from "ava"
import { expect } from "chai"

test.cb("foo", t => {
    expect("test").to.equal("test")
    t.end()
})

test.todo("foo2")
