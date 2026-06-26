from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.lib.enums import TA_CENTER, TA_LEFT

OUTPUT = "/Users/ahsansagheer/Projects/muaythai-gear-quiz/public/muaythai-cardio-plan.pdf"

RED = colors.HexColor("#DC2626")
DARK = colors.HexColor("#09090B")
ZINC800 = colors.HexColor("#27272A")
ZINC600 = colors.HexColor("#52525B")
ZINC300 = colors.HexColor("#D4D4D8")
WHITE = colors.white

doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=letter,
    leftMargin=0.75*inch,
    rightMargin=0.75*inch,
    topMargin=0.75*inch,
    bottomMargin=0.75*inch,
)

styles = getSampleStyleSheet()

title_style = ParagraphStyle("Title", fontSize=28, textColor=WHITE, spaceAfter=6, fontName="Helvetica-Bold", alignment=TA_CENTER)
subtitle_style = ParagraphStyle("Subtitle", fontSize=13, textColor=ZINC300, spaceAfter=4, fontName="Helvetica", alignment=TA_CENTER)
h1_style = ParagraphStyle("H1", fontSize=18, textColor=RED, spaceAfter=8, spaceBefore=16, fontName="Helvetica-Bold")
h2_style = ParagraphStyle("H2", fontSize=13, textColor=WHITE, spaceAfter=6, spaceBefore=10, fontName="Helvetica-Bold")
body_style = ParagraphStyle("Body", fontSize=10, textColor=ZINC300, spaceAfter=5, fontName="Helvetica", leading=15)
bullet_style = ParagraphStyle("Bullet", fontSize=10, textColor=ZINC300, spaceAfter=4, fontName="Helvetica", leftIndent=16, leading=14)
label_style = ParagraphStyle("Label", fontSize=9, textColor=RED, spaceAfter=2, fontName="Helvetica-Bold")
note_style = ParagraphStyle("Note", fontSize=9, textColor=ZINC600, spaceAfter=4, fontName="Helvetica-Oblique")

def week_table(days):
    data = [["Day", "Session", "Duration", "Focus"]]
    for d in days:
        data.append(d)
    t = Table(data, colWidths=[0.6*inch, 2.1*inch, 1.0*inch, 2.8*inch])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,0), RED),
        ("TEXTCOLOR", (0,0), (-1,0), WHITE),
        ("FONTNAME", (0,0), (-1,0), "Helvetica-Bold"),
        ("FONTSIZE", (0,0), (-1,0), 9),
        ("BACKGROUND", (0,1), (-1,-1), ZINC800),
        ("TEXTCOLOR", (0,1), (-1,-1), ZINC300),
        ("FONTNAME", (0,1), (-1,-1), "Helvetica"),
        ("FONTSIZE", (0,1), (-1,-1), 9),
        ("ROWBACKGROUNDS", (0,1), (-1,-1), [ZINC800, colors.HexColor("#1F1F23")]),
        ("GRID", (0,0), (-1,-1), 0.5, colors.HexColor("#3F3F46")),
        ("ALIGN", (0,0), (-1,-1), "LEFT"),
        ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
        ("TOPPADDING", (0,0), (-1,-1), 5),
        ("BOTTOMPADDING", (0,0), (-1,-1), 5),
        ("LEFTPADDING", (0,0), (-1,-1), 6),
    ]))
    return t

story = []

# Cover
story.append(Spacer(1, 0.5*inch))
story.append(Paragraph("MUAY THAI", title_style))
story.append(Paragraph("4-WEEK CARDIO TRAINING PLAN", ParagraphStyle("T2", fontSize=20, textColor=RED, spaceAfter=8, fontName="Helvetica-Bold", alignment=TA_CENTER)))
story.append(Spacer(1, 0.1*inch))
story.append(HRFlowable(width="100%", thickness=1, color=RED))
story.append(Spacer(1, 0.15*inch))
story.append(Paragraph("Build fight-ready conditioning from scratch.", subtitle_style))
story.append(Paragraph("Go from gassing out in round 1 to lasting 5 full rounds.", subtitle_style))
story.append(Spacer(1, 0.4*inch))

# Intro box
intro_data = [[Paragraph(
    "Most Muay Thai beginners train techniques but neglect cardio — then wonder why they can't make it through a full class. "
    "This 4-week plan is built specifically around Muay Thai energy demands: short explosive bursts, active recovery, "
    "and the kind of full-body conditioning you need for real training. No gym required for most sessions.",
    body_style
)]]
intro_table = Table(intro_data, colWidths=[6.5*inch])
intro_table.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,-1), ZINC800),
    ("BOX", (0,0), (-1,-1), 1, RED),
    ("TOPPADDING", (0,0), (-1,-1), 10),
    ("BOTTOMPADDING", (0,0), (-1,-1), 10),
    ("LEFTPADDING", (0,0), (-1,-1), 12),
    ("RIGHTPADDING", (0,0), (-1,-1), 12),
]))
story.append(intro_table)
story.append(Spacer(1, 0.3*inch))

# How to use
story.append(Paragraph("HOW TO USE THIS PLAN", h1_style))
story.append(Paragraph("Round timing: 3 minutes on, 1 minute rest — always. This mirrors real Muay Thai round structure.", bullet_style))
story.append(Paragraph("Intensity scale: RPE (Rate of Perceived Exertion) out of 10. RPE 6 = can talk but breathing hard. RPE 8 = can't hold a conversation. RPE 10 = max effort.", bullet_style))
story.append(Paragraph("Rest days are mandatory. Your cardio improves during recovery, not during training.", bullet_style))
story.append(Paragraph("Equipment needed: jump rope, heavy bag (optional), timer app on phone.", bullet_style))
story.append(Spacer(1, 0.2*inch))

# Week 1
story.append(PageBreak())
story.append(Paragraph("WEEK 1 — BUILD THE BASE", h1_style))
story.append(Paragraph("Goal: Establish your aerobic base with daily roadwork. Muay Thai fighters run every day — this is where it starts.", body_style))
story.append(Spacer(1, 0.1*inch))
story.append(week_table([
    ["Mon", "Roadwork — easy run", "5 km", "RPE 6 — conversational pace, flat route"],
    ["Tue", "Roadwork + jump rope", "5 km + 15 min", "Easy run, then 5x3 min rope with 1 min rest"],
    ["Wed", "Roadwork — easy run", "5 km", "RPE 6 — same route, focus on breathing"],
    ["Thu", "Roadwork + bag rounds", "5 km + 20 min", "Easy run, then 5x3 min bag at RPE 7"],
    ["Fri", "Roadwork — easy run", "5 km", "RPE 6 — last easy day of the week"],
    ["Sat", "Long slow run", "8 km", "RPE 5-6 — build aerobic base, no rush"],
    ["Sun", "REST", "—", "Full recovery — mandatory"],
]))
story.append(Spacer(1, 0.15*inch))
story.append(Paragraph("Week 1 Tips:", label_style))
story.append(Paragraph("The daily runs will feel easy — that's correct. Aerobic base takes time to build and rushing it leads to injury. Exhale on every strike during bag rounds. Never hold your breath.", note_style))

# Week 2
story.append(Spacer(1, 0.3*inch))
story.append(Paragraph("WEEK 2 — BUILD VOLUME", h1_style))
story.append(Paragraph("Goal: Increase run distance and start adding intensity. Legs should feel stronger by end of week.", body_style))
story.append(Spacer(1, 0.1*inch))
story.append(week_table([
    ["Mon", "Roadwork — steady run", "6 km", "RPE 6-7 — slightly faster than week 1"],
    ["Tue", "Roadwork + shadowboxing", "6 km + 20 min", "Run, then 5x3 min shadow: jab-cross-teep non-stop"],
    ["Wed", "Roadwork — easy run", "5 km", "RPE 6 — active recovery day"],
    ["Thu", "Roadwork + bag rounds", "6 km + 25 min", "Run, then 6x3 min bag at RPE 7-8"],
    ["Fri", "Hill sprints + easy jog", "30 min total", "10x30 sec hill sprint, walk back, then 10 min jog"],
    ["Sat", "Long run", "10 km", "RPE 6 — longest run of the plan so far, steady pace"],
    ["Sun", "REST", "—", "Full recovery"],
]))
story.append(Spacer(1, 0.15*inch))
story.append(Paragraph("Week 2 Tips:", label_style))
story.append(Paragraph("The 10km Saturday run is your milestone. Don't race it — if you finish at a jog, that's perfect. The teep (push kick) non-stop for a full round will destroy your hip flexors in the best way.", note_style))

# Week 3
story.append(PageBreak())
story.append(Paragraph("WEEK 3 — FIGHT SIMULATION", h1_style))
story.append(Paragraph("Goal: Combine running base with fight-pace bag sessions. Train like you're preparing for a real fight.", body_style))
story.append(Spacer(1, 0.1*inch))
story.append(week_table([
    ["Mon", "Roadwork — interval run", "6 km", "2 min fast / 1 min jog alternating throughout"],
    ["Tue", "Roadwork + 5-round bag", "5 km + 35 min", "Easy run, then 5x3 min bag full pace, RPE 8-9"],
    ["Wed", "Roadwork — easy run", "5 km", "RPE 6 — active recovery, shake out the legs"],
    ["Thu", "Roadwork + circuit", "5 km + 30 min", "Run, then 4 rounds: rope/shadow/bag/burpees, 45 sec each no rest"],
    ["Fri", "Sprint session", "30 min", "10x100m full sprints, walk back — no jogging between"],
    ["Sat", "Long run", "12 km", "RPE 6-7 — push the distance, controlled effort"],
    ["Sun", "REST", "—", "Full recovery — mandatory"],
]))
story.append(Spacer(1, 0.15*inch))
story.append(Paragraph("Week 3 Tips:", label_style))
story.append(Paragraph("The Thursday circuit is brutal — that's the point. Muay Thai fights don't pause. The 12km Saturday run is your biggest aerobic day. If you complete it you're fight-ready on the cardio base.", note_style))

# Week 4
story.append(Spacer(1, 0.3*inch))
story.append(Paragraph("WEEK 4 — PEAK & TEST", h1_style))
story.append(Paragraph("Goal: Hit peak conditioning then taper. By Friday you should last 5 full rounds without gassing.", body_style))
story.append(Spacer(1, 0.1*inch))
story.append(week_table([
    ["Mon", "Roadwork — interval run + bag", "6 km + 25 min", "1 min fast / 1 min jog throughout, then 5x3 min bag RPE 8"],
    ["Tue", "Roadwork — hard run", "8 km", "RPE 7-8 — push harder than week 1, same distance feels easier"],
    ["Wed", "Roadwork — easy run", "5 km", "RPE 6 — active recovery, flush the legs"],
    ["Thu", "Roadwork + shadowboxing", "5 km + 20 min", "Easy run, then 4x3 min shadow — clean technique, not pace"],
    ["Fri", "5-round bag test", "35 min", "5x3 min bag at RPE 9 — this is your fitness test"],
    ["Sat", "Long run — final", "10 km", "RPE 6 — run the same 10km as week 2. Notice the difference."],
    ["Sun", "REST", "—", "Celebrate — you made it"],
]))
story.append(Spacer(1, 0.15*inch))
story.append(Paragraph("Week 4 Tips:", label_style))
story.append(Paragraph("Friday is your test. If you can do 5x3 min bag rounds at high intensity and still feel in control at the end, your base cardio is fight-ready. Compare how round 5 felt in week 1 vs week 4.", note_style))

# Drills
story.append(PageBreak())
story.append(Paragraph("KEY DRILLS EXPLAINED", h1_style))

drills = [
    ("Teep Cardio Drill", "Stand in front of the bag. Alternate left and right teeps (push kicks) for a full 3-minute round without stopping. Sounds simple — it will destroy your cardio in the best way. This replicates the leg and hip flexor demand of a real Muay Thai round."),
    ("Switch Kick Intervals", "30 seconds of switch kicks at maximum speed, 30 seconds rest. Repeat 10 times. The switch kick requires a full-body rotation — it taxes your core, hips, and conditioning simultaneously."),
    ("Shadowboxing with Burpee Finish", "2 minutes of shadowboxing (jab-cross-hook-teep combos), then 10 burpees immediately. No rest between. Repeat 5 times. This simulates the oxygen debt of a real fight."),
    ("Jump Rope Pyramid", "1 min easy > 2 min medium > 3 min fast > 2 min medium > 1 min easy. No rest between levels. Jump rope is the single best Muay Thai cardio tool — it builds footwork, timing, and aerobic capacity simultaneously."),
    ("Clinch Conditioning", "With a partner: 2 minutes of clinch work (grip fighting, knee strikes, off-balancing). No breaks. If solo: grab a heavy bag and practice pulling it toward you and driving knees for 2 minutes straight."),
]

for name, desc in drills:
    story.append(Paragraph(name, h2_style))
    story.append(Paragraph(desc, body_style))

# Nutrition
story.append(PageBreak())
story.append(Paragraph("NUTRITION FOR MUAY THAI CARDIO", h1_style))
story.append(Paragraph("You don't need a complicated diet. Follow these basics and your training will improve:", body_style))
story.append(Spacer(1, 0.1*inch))

nutrition = [
    ("Pre-training (1-2 hrs before)", "Small meal with carbs + protein. Rice and chicken, oats with eggs, banana with peanut butter. Avoid training on a full stomach."),
    ("Post-training (within 30 min)", "Protein + carbs to start recovery. Protein shake + banana, or rice and eggs. This window matters most for cardio recovery."),
    ("Hydration", "Drink water consistently all day — not just during training. Dehydration kills cardio performance faster than anything. Aim for 3-4 litres on training days."),
    ("What to avoid before training", "Heavy meals, alcohol, excessive caffeine. If you feel sick during bag rounds, you ate too close to training."),
]

for title, desc in nutrition:
    story.append(Paragraph(title, label_style))
    story.append(Paragraph(desc, body_style))

# Final page
story.append(PageBreak())
story.append(Spacer(1, 1*inch))
story.append(Paragraph("WHAT'S NEXT", h1_style))
story.append(Paragraph(
    "You've built the cardio base. Now make sure your gear matches your training level. "
    "The wrong gloves, shin guards, or Thai pads can slow your progress — or worse, cause injury.",
    body_style
))
story.append(Spacer(1, 0.2*inch))
story.append(Paragraph(
    "Take our free gear quiz at muaythai-gear-quiz.vercel.app and get personalized recommendations "
    "based on your training style, budget, and experience level.",
    body_style
))
story.append(Spacer(1, 0.3*inch))

cta_data = [[Paragraph("muaythai-gear-quiz.vercel.app", ParagraphStyle("CTA", fontSize=14, textColor=WHITE, fontName="Helvetica-Bold", alignment=TA_CENTER))]]
cta_table = Table(cta_data, colWidths=[6.5*inch])
cta_table.setStyle(TableStyle([
    ("BACKGROUND", (0,0), (-1,-1), RED),
    ("TOPPADDING", (0,0), (-1,-1), 14),
    ("BOTTOMPADDING", (0,0), (-1,-1), 14),
    ("ROUNDEDCORNERS", [8]),
]))
story.append(cta_table)

def add_background(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(DARK)
    canvas.rect(0, 0, letter[0], letter[1], fill=1, stroke=0)
    canvas.restoreState()

doc.build(story, onFirstPage=add_background, onLaterPages=add_background)
print(f"PDF created: {OUTPUT}")
