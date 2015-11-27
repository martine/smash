package main

import (
	"os/exec"
	"smash/base"
	"smash/keys"
	"smash/readline"
	"smash/shell"
	"strings"
	"time"

	"github.com/martine/gocairo/cairo"
)

type LogEntry struct {
	prompt *PromptView
	term   *TermView
}

type LogView struct {
	ViewBase
	Entries []*LogEntry
	shell   *shell.Shell

	rlconfig     *readline.Config
	scrollOffset int
	scrollAnim   *base.Lerp
}

func NewLogView(parent View) *LogView {
	lv := &LogView{
		ViewBase: ViewBase{parent},
		rlconfig: readline.NewConfig(),
	}
	cwd := ""
	var env map[string]string
	lv.shell = shell.NewShell(cwd, env)
	lv.addEntry()
	return lv
}

func (lv *LogView) addEntry() {
	e := &LogEntry{
		prompt: NewPromptView(lv, lv.rlconfig, lv.Accept),
	}
	lv.Entries = append(lv.Entries, e)
}

func ParseCommand(input string) *exec.Cmd {
	// TODO: something correct.
	args := strings.Split(input, " ")
	return exec.Command(args[0], args[1:]...)
}

func (lv *LogView) Accept(input string) bool {
	e := lv.Entries[len(lv.Entries)-1]
	e.term = NewTermView(lv)
	cmd, err := lv.shell.Run(lv.shell.Parse(input))
	e.term.OnExit = func() {
		lv.addEntry()
	}
	if cmd != nil {
		e.term.Start(cmd)
	} else {
		// Command was run internally.
		if err != nil {
			e.term.term.DisplayString(err.Error())
		}
		e.term.Finish()
	}
	return true
}

func (l *LogView) Draw(cr *cairo.Context) {
	cr.Translate(0, float64(-l.scrollOffset))
	y := 0
	for _, e := range l.Entries {
		e.prompt.Draw(cr)
		h := e.prompt.Height()
		y += h
		cr.Translate(0, float64(h))
		if e.term != nil {
			e.term.Draw(cr)
			h = e.term.Height()
			y += h
			cr.Translate(0, float64(h))
		}
	}
	if y > 400 {
		scrollOffset := y - 400
		if l.scrollOffset != scrollOffset {
			if l.scrollAnim != nil && l.scrollAnim.Done {
				l.scrollAnim = nil
			}
			if l.scrollAnim == nil {
				l.scrollAnim = base.NewLerp(&l.scrollOffset, scrollOffset, 40*time.Millisecond)
				l.GetWindow().win.AddAnimation(l.scrollAnim)
			} else {
				// TODO adjust existing anim
			}
		}
	}
}

func (l *LogView) Key(key keys.Key) {
	e := l.Entries[len(l.Entries)-1]
	if e.term != nil && e.term.Running {
		e.term.Key(key)
	} else {
		e.prompt.Key(key)
	}
}

func (l *LogView) Scroll(dy int) {
}
