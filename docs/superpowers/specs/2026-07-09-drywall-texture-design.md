# Drywall Texture Template — Design Spec

## Context

Scott Apps trade template reskin of `drywall-texture-template` (fork of HVAC), following `RESKIN_PLAYBOOK.md`. Sibling-cloned patterns from `handyman-template` / `garage-door-template`.

Per standing decisions for non-gallery trades: per-city SEO subpages are deleted, and the `src/app/projects/` route is deleted.

## Business Identity (locked, reuse verbatim)

- **Business name:** LevelWall Drywall
- **Tagline:** Hang · Tape · Texture · Repair
- **Location:** Waco, TX (home base)
- **Service area cities:** Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead
- **Founded:** 2009
- **Owner:** Mitch Rowan
- **Credential/license line:** "Pro Drywall Crews Contractors · Bonded & Insured"
- **Guarantee:** Smooth Finish Guarantee · 2-Year Workmanship
- **Social proof:** 4.9★, 980+ reviews, 5,000+ rooms finished
- **Brand accent color:** warm gray `#78716c` with `$orange` `#ea580c` (light `#f97316`; dark `#c2410c`)
- **Phone:** (254) 970-1818 / `tel:+12549701818`
- **Email:** hello@levelwalldrywall.com
- **Domain:** levelwalldrywall.com
- **Address:** 2100 N 25th St, Waco, TX 76708
- No per-city SEO subpages

## Services (6)

| Old HVAC slug | New slug | Title |
|---|---|---|
| ac-repair | drywall-hanging | Drywall Hanging |
| heating | taping-finishing | Taping & Finishing |
| installation | texture-matching | Texture Matching |
| duct-cleaning | water-damage-drywall | Water Damage Drywall |
| indoor-air-quality | popcorn-removal | Popcorn Ceiling Removal |
| maintenance | patch-repair | Patch & Repair |

## Industries Served (3)

| Old slug | New slug | Title |
|---|---|---|
| automotive | homebuilders | Homebuilders |
| manufacturing | property-management | Property Management |
| oil-gas | restoration-partners | Restoration Partners |

## Blogs (3)

1. `texture-matching-after-patch`
2. `popcorn-ceiling-removal-cost`
3. `drywall-vs-plaster-repairs`

## Pages

Home, Services (index + 6 detail), Industries (index + 3 detail), About, Contact, Service Areas, Blog (index + 3 posts), Privacy. No `/projects` route. No per-city SEO.

## Non-goals

- No per-city SEO subpages
- No new component primitives
- No project gallery
- No marketplace catalog flip (separate pass)

## Success Criteria

- Zero Arctic Air / HVAC-pro / old phone / Mapbox pk leaks in customer-facing source
- Accent `#ea580c` in `$orange`
- `npm run typecheck` passes
- Logical git commits by batch
