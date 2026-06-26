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
    t = Table(data, colWidths=[0.7*inch, 2.4*inch, 1.1*inch, 2.6*inch])
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
story.append(Paragraph("Goal: Establish your aerobic base. Everything at moderate intensity. Don't push to failure.", body_style))
story.append(Spacer(1, 0.1*inch))
story.append(week_table([
    ["Mon", "Roadwork (steady run)", "30 min", "RPE 6 — conversational pace"],
    ["Tue", "Jump rope + shadowboxing", "20 min", "3x3 min rope, 3x3 min shadow"],
    ["Wed", "REST", "—", "Active recovery: light walk or stretch"],
    ["Thu", "Bag rounds", "20 min", "5x3 min rounds, RPE 6-7"],
    ["Fri", "Jump rope intervals", "20 min", "30 sec fast / 30 sec slow x 20"],
    ["Sat", "Long slow run", "40 min", "RPE 5-6 — build aerobic base"],
    ["Sun", "REST", "—", "Full recovery"],
]))
story.append(Spacer(1, 0.15*inch))
story.append(Paragraph("Week 1 Tips:", label_style))
story.append(Paragraph("Focus on breathing rhythm. Exhale on every strike. Never hold your breath during bag rounds — this is the most common beginner mistake.", note_style))

# Week 2
story.append(Spacer(1, 0.3*inch))
story.append(Paragraph("WEEK 2 — ADD INTENSITY", h1_style))
story.append(Paragraph("Goal: Introduce higher intensity intervals. Start feeling the burn but keep technique clean.", body_style))
story.append(Spacer(1, 0.1*inch))
story.append(week_table([
    ["Mon", "Interval run", "30 min", "1 min fast / 2 min jog x 10"],
    ["Tue", "Jump rope + bag rounds", "30 min", "4x3 min rope, 4x3 min bag RPE 7"],
    ["Wed", "REST", "—", "Stretch or light yoga"],
    ["Thu", "Shadowboxing circuits", "25 min", "5x3 min: jab-cross-teep combos non-stop"],
    ["Fri", "Hill sprints or stair runs", "20 min", "10x30 sec sprint, walk back down"],
    ["Sat", "Long run + bag finisher", "50 min", "35 min run + 3x3 min bag RPE 8"],
    ["Sun", "REST", "—", "Full recovery"],
]))
story.append(Spacer(1, 0.15*inch))
story.append(Paragraph("Week 2 Tips:", label_style))
story.append(Paragraph("Your legs will be sore — that's normal. The teep (push kick) is one of the most cardio-intensive techniques. Practice it non-stop for a full round to build specific Muay Thai conditioning.", note_style))

# Week 3
story.append(PageBreak())
story.append(Paragraph("WEEK 3 — FIGHT SIMULATION", h1_style))
story.append(Paragraph("Goal: Train like you're preparing for a fight. 5-round sessions, mix of all tools.", body_style))
story.append(Spacer(1, 0.1*inch))
story.append(week_table([
    ["Mon", "5-round bag session", "35 min", "5x3 min full pace, 1 min rest — RPE 8"],
    ["Tue", "Roadwork intervals", "35 min", "2 min fast / 1 min jog x 10"],
    ["Wed", "Active recovery", "20 min", "Light shadowboxing + stretching"],
    ["Thu", "Circuit: rope/shadow/bag/burpees", "30 min", "4 rounds of all 4, 30 sec each, no rest"],
    ["Fri", "Sprint finishers", "25 min", "10x100m sprints — full recovery between"],
    ["Sat", "Full fight simulation", "45 min", "5x5 min rounds: shadow+bag+rope rotation"],
    ["Sun", "REST", "—", "Full recovery — mandatory"],
]))
story.append(Spacer(1, 0.15*inch))
story.append(Paragraph("Week 3 Tips:", label_style))
story.append(Paragraph("The circuit on Thursday is brutal — that's the point. Muay Thai fights don't pause between techniques. Training without rest between stations teaches your body to keep moving when it wants to stop.", note_style))

# Week 4
story.append(Spacer(1, 0.3*inch))
story.append(Paragraph("WEEK 4 — PEAK & TEST", h1_style))
story.append(Paragraph("Goal: Hit peak conditioning then taper. By end of week you should last 5 full rounds without gassing.", body_style))
story.append(Spacer(1, 0.1*inch))
story.append(week_table([
    ["Mon", "Peak bag session", "40 min", "6x3 min bag, RPE 8-9"],
    ["Tue", "Interval run — peak", "35 min", "1 min max / 1 min jog x 15"],
    ["Wed", "REST", "—", "Full rest — body preparing for peak"],
    ["Thu", "Light technical session", "25 min", "4x3 min shadowboxing — focus on form"],
    ["Fri", "5-round test", "35 min", "5x3 min bag at RPE 9 — track how you feel"],
    ["Sat", "Easy jog", "30 min", "RPE 5 — flush the legs"],
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
